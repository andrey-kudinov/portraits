"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");

const dist = "./dist/";

gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("build-ts", () => {
    return gulp.src("./src/ts/main.ts")
                .pipe(webpack({
                    mode: 'development',
                    entry: './src/ts/main.ts',
                    output: {
                        filename: 'script.js'
                    },
                    watch: true,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.tsx?$/,
                            use: 'ts-loader',
                            exclude: /node_modules/,
                          }
                        ]
                      },
                      resolve: {
                        extensions: ['.tsx', '.ts', '.js'],
                      },
                }))
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
});

gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*.*")
                .pipe(gulp.dest(dist + "/assets"))
                .on("end", browsersync.reload);
});

gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-ts"));
});

gulp.task("build-prod-ts", () => {
  return gulp.src("./src/ts/main.ts")
              .pipe(webpack({
                mode: 'production',
                entry: './src/ts/main.ts',
                output: {
                    filename: 'script.js'
                },
                watch: false,
                devtool: "source-map",
                module: {
                    rules: [
                      {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                      }
                    ]
                  },
                  resolve: {
                    extensions: ['.tsx', '.ts', '.js'],
                  },
            }))
            .pipe(gulp.dest(dist));
});

gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-ts"));

gulp.task("build-prod", gulp.parallel("copy-html", "copy-assets", "build-prod-ts"));

gulp.task("default", gulp.parallel("watch", "build"));
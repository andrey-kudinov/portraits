export const scroll = (upSelector: string) => {
  const upElement = document.querySelector(upSelector)

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElement.classList.add('animated', 'fadeIn')
      upElement.classList.remove('fadeOut')
    } else {
      upElement.classList.add('animated', 'fadeOut')
      upElement.classList.remove('fadeIn')
    }
  })

  const links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault()

      const widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top
      let start: number = 0

      const step = (time: number) => {
        if (start === 0) {
          start = time
        }

        const progress = time - start,
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock)

        document.documentElement.scrollTo(0, r)

        if (r !== widthTop + toBlock) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      }

      requestAnimationFrame(step)
    })
  })

  // const element = document.documentElement,
  //   body = document.body

  // const calcScroll = () => {
  //   upElement.addEventListener('click', function (event) {
  //     const scrollTop = Math.round(body.scrollTop || element.scrollTop)

  //     if (this.hash !== '') {
  //       event.preventDefault()

  //       let hashElement = document.querySelector(this.hash)
  //       let hashElementTop = 0

  //       while (hashElement.offsetParent) {
  //         hashElementTop += hashElement.offsetTop
  //         hashElement = hashElement.offsetParent
  //       }

  //       hashElementTop = Math.round(hashElementTop)
  //       smoothScroll(scrollTop, hashElementTop, this.hash)
  //     }
  //   })
  // }

  // const smoothScroll = (from, to, hash) => {
  //   const timeInterval = 1
  //   let prevScrollTop, speed

  //   if (to > from) {
  //     speed = 30
  //   } else {
  //     speed = -30
  //   }

  //   const move = setInterval(() => {
  //     const scrollTop = Math.round(body.scrollTop || element.scrollTop)

  //     if (
  //       prevScrollTop === scrollTop ||
  //       (to > from && scrollTop >= to) ||
  //       (to < from && scrollTop <= to)
  //     ) {
  //       clearInterval(move)
  //       history.replaceState(history.state, document.title, location.href.replace(/#,*$/g, '') + hash)
  //     } else {
  //       body.scrollTop += speed
  //       element.scrollTop += speed
  //       prevScrollTop = scrollTop
  //     }
  //   }, timeInterval)
  // }

  // calcScroll()
}

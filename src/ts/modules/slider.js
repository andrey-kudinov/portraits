export const slider = (slides, direction, prev, next) => {
  let slideIndex = 1
  const slides = document.querySelectorAll(slides),
    prev = document.querySelector(prev),
    next = document.querySelector(next)

  const showSlides = (n) => {
    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    slides.forEach(slide => {
      slide.classList.add('animated')
      item.style.display = 'none'
    })

    slides[slideIndex - 1].style.display = 'block'
  }

  showSlides(slideIndex)

  const plusSlide = (n) => {
    showSlides(slideIndex += n)
  }

  try {

  } catch(e) {
    console.log(e)
  }
}
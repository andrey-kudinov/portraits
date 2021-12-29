interface IArgs {
  slidesSelector: string
  direction?: string
  prevSelector?: string
  nextSelector?: string
}

export const slider = (args: IArgs) => {
  const {slidesSelector, direction = '', prevSelector, nextSelector} = args

  let slideIndex = 1,
    paused: any = false

  const slides = document.querySelectorAll<HTMLElement>(slidesSelector)

  const showSlides = (n: number) => {
    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    slides.forEach((slide: HTMLElement) => {
      slide.classList.add('animated')
      slide.style.display = 'none'
    })

    slides[slideIndex - 1].style.display = 'block'
  }

  showSlides(slideIndex)

  const plusSlide = (n: number) => {
    showSlides(slideIndex += n)
  }

  try {
    const prev = document.querySelector(prevSelector),
      next = document.querySelector(nextSelector)

    prev.addEventListener('click', () => {
      plusSlide(-1)
      slides[slideIndex - 1].classList.remove('slideInLeft')
      slides[slideIndex - 1].classList.add('slideInRight')
    })

    next.addEventListener('click', () => {
      plusSlide(1)
      slides[slideIndex - 1].classList.remove('slideInRight')
      slides[slideIndex - 1].classList.add('slideInLeft')
    })
  } catch(e) {}

  const activateAnimation = () => {
    if (direction === 'vertical') {
      paused = setInterval(() => {
        plusSlide(1)
        slides[slideIndex - 1].classList.add('slideInDown')
      }, 3000)
    } else {
      paused = setInterval(() => {
        plusSlide(1)
        slides[slideIndex - 1].classList.remove('slideInRight')
        slides[slideIndex - 1].classList.add('slideInLeft')
      }, 3000)
    }
  }

  activateAnimation()

  slides[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused)
  })
  slides[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation()
  })
}
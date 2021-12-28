interface IArgs {
  triggerSelector: string
  modalSelector: string
  closeSelector: string
  destroyTrigger?: boolean
}

export const modals = () => {
  let isButtonPressed: boolean = false

  const bindModal = (args: IArgs) => {
    const { triggerSelector, modalSelector, closeSelector, destroyTrigger = false } = args

    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector<HTMLElement>(modalSelector),
      close = document.querySelector(closeSelector),
      popups =document.querySelectorAll<HTMLElement>('[data-modal]')

    const closePopups = () => {
      popups.forEach(popup => {
        popup.style.display = 'none'
        popup.classList.add('animated', 'fadeIn')
      })
    }

    const closePopup = () => {
      modal.style.display = 'none'
      document.body.style.overflow = ''
    }

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (event: any) => {
        isButtonPressed = true

        if (event.target) {
          event.preventDefault()
        }

        closePopups()

        if (destroyTrigger) {
          trigger.remove()
        }
  
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'

        if (document.querySelector(`${modalSelector} input:not([type='radio'])`)) {
          document.querySelector<HTMLElement>(`${modalSelector} input:not([type='radio'])`).focus()
        }
      })
    })

    close.addEventListener('click', (event: any) => {
      closePopup()
    })

    document.addEventListener('keydown', event => {
      if (event.key === "Escape") {
        closePopup()
      }
    });

    modal.addEventListener('click', (event: any) => {
      if (event.target === modal) {
        closePopups()
        closePopup()
      }
    })
  }

  const showModalByTime = (selector: any, time: any) => {
    setTimeout(() => {
      let display

      document.querySelectorAll('[data-modal]').forEach(modal => {
        if (getComputedStyle(modal).display !== 'none') {
          display = 'block'
        }
      })

      if (!display) {
        document.querySelector(selector).style.display = 'block'
        document.body.style.overflow = 'hidden'
      }
    }, time)
  }

  const openByScroll = (selector: string) => {
    window.addEventListener('scroll', () => {
      const { pageYOffset } = window
      const clientHeight = document.documentElement.clientHeight
      const scrollHeight = document.documentElement.scrollHeight
      if (!isButtonPressed && (pageYOffset >= scrollHeight - clientHeight)) {
        document.querySelector<HTMLElement>(selector).click()
      }
    })
  }

  const design = {
    triggerSelector: '.button-design',
    modalSelector: '.popup-design',
    closeSelector: '.popup-design .popup-close'
  },
    consultation = {
      triggerSelector: '.button-consultation',
      modalSelector: '.popup-consultation',
      closeSelector: '.popup-consultation .popup-close'
    },
    gift = {
      triggerSelector: '.fixed-gift',
      modalSelector: '.popup-gift',
      closeSelector: '.popup-gift .popup-close',
      destroyTrigger: true
    }

  bindModal(design)
  bindModal(consultation)
  bindModal(gift)

  // showModalByTime('.popup-consultation', 5000)

  openByScroll('.fixed-gift')
}

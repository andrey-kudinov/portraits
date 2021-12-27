interface IArgs {
  triggerSelector: string
  modalSelector: string
  closeSelector: string
  closeClickOverlay?: boolean
}

export const modals = () => {
  const bindModal = (args: IArgs) => {
    const { triggerSelector, modalSelector, closeSelector, closeClickOverlay = true } = args

    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector<HTMLElement>(modalSelector),
      close = document.querySelector(closeSelector),
      popups =document.querySelectorAll<HTMLElement>('[data-modal]')

    const closePopups = () => {
      popups.forEach(popup => {
        popup.style.display = 'none'
      })
    }

    const closePopup = () => {
      modal.style.display = 'none'
      document.body.style.overflow = ''
    }

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (event: any) => {
        if (event.target) {
          event.preventDefault()
        }

        closePopups()
  
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
      if (event.target === modal && closeClickOverlay) {
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

  const design = {
    triggerSelector: '.button-design',
    modalSelector: '.popup-design',
    closeSelector: '.popup-design .popup-close'
  },
    consultation = {
      triggerSelector: '.button-consultation',
      modalSelector: '.popup-consultation',
      closeSelector: '.popup-consultation .popup-close'
    }

  bindModal(design)
  bindModal(consultation)

  showModalByTime('.popup-consultation', 5000)
}

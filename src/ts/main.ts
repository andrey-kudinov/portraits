import { modals, slider, forms, validation, mask, showMore } from './modules';

window.addEventListener('DOMContentLoaded', () => {
  modals()

  const feedbackSliderArgs = {
    slidesSelector: '.feedback-slider-item',
    prevSelector: '.main-prev-btn',
    nextSelector: '.main-next-btn'
  },
    mainSliderArgs = {
      slidesSelector: '.main-slider-item',
      direction: 'vertical'
    }

  slider(feedbackSliderArgs)
  slider(mainSliderArgs)
  forms()
  mask('[name="phone"]')
  validation('[name="name"]')
  validation('[name="message"]')
  showMore('.button-styles', '.styles-2')
})

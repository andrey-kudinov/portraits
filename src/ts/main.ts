import {
  modals,
  slider,
  forms,
  validation,
  mask,
  showMore,
  calc,
  filter
} from './modules'

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
    },
    calcArgs = {
      size: '#size',
      material: '#material',
      options: '#options',
      promocode: '.promocode',
      result: '.calc-price'
    }

  slider(feedbackSliderArgs)
  slider(mainSliderArgs)
  forms()
  mask('[name="phone"]')
  validation('[name="name"]')
  validation('[name="message"]')
  showMore('.button-styles', '#styles .row')
  calc(calcArgs)
  filter()
})

export const showMore = (trigger, styles) => {
  const cards = document.querySelectorAll(styles),
    button = document.querySelector(trigger)

    cards.forEach(card => {
      card.classList.add('animated', 'fadeIn')
    })

    button.addEventListener('click', () => {
      cards.forEach(card => {
        card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs')
        card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
      })
      button.remove()
    })
}
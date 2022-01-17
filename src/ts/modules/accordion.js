export const accordion = (triggers, items) => {
  const buttons = document.querySelectorAll(triggers)
  const blocks = document.querySelectorAll(items)

  blocks.forEach(block => {
    block.classList.add('animated', 'fadeInDown')
  })

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
        buttons.forEach(button => {
          button.classList.remove('active', 'active-style')
        })
        this.classList.add('active', 'active-style')
      }
    })
  })
}

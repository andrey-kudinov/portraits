export const accordion = (triggers: string) => {
  const buttons = document.querySelectorAll(triggers)

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active-style')
      this.nextElementSibling.classList.toggle('active-content')

      if (this.classList.contains('active-style')) {
        this.nextElementSibling.style.maxHeight = `${this.nextElementSibling.scrollHeight + 80}px`
      } else {
        this.nextElementSibling.style.maxHeight = '0px'
      }
    })
  })

  // const blocks = document.querySelectorAll(items)

  // blocks.forEach(block => {
  //   block.classList.add('animated', 'fadeInDown')
  // })

  // buttons.forEach(button => {
  //   button.addEventListener('click', function() {
  //     if (!this.classList.contains('active')) {
  //       buttons.forEach(button => {
  //         button.classList.remove('active', 'active-style')
  //       })
  //       this.classList.add('active', 'active-style')
  //     }
  //   })
  // })
}

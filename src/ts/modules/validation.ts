export const validation = (selector: string) => {
  const textInputs = document.querySelectorAll(selector)

  textInputs.forEach(input => {
    input.addEventListener('keypress', (event: KeyboardEvent) => {
      if(event.key.match(/[^а-яё 0-9]/ig)) {
        event.preventDefault()
      }
    })
  })
}
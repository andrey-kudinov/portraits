export const mask = (selector) => {
  const setCursorPosition = (position, element) => {
    element.focus()

    if(element.setSelectionRange) {
      element.setSelectionRange(position, position)
    } else if(element.createTextRange) {
      const range = elementTextRange()

      range.collapse(true)
      range.moveEnd('character', position)
      range.moveStart('character', position)
      range.select()
    }
  }

  function createMask(event) {
    const matrix = '+7 (___) ___ __ __',
      def = matrix.replace(/\D/g, '')
      
    let i = 0,
      value = this.value.replace(/\D/g, '')

    if(def.length >= value.length) {
      value = def
    }

    this.value = matrix.replace(/./g, (a) => {
      return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a
    })

    if(event.type === 'blur') {
      if(this.value.length === 2) {
        this.value = ''
      }
    } else {
      setCursorPosition(this.value.length, this)
    }
  }

  const inputs = document.querySelectorAll(selector)

  inputs.forEach(input => {
    input.addEventListener('input', createMask)
    input.addEventListener('focus', createMask)
    input.addEventListener('blur', createMask)
  })
}
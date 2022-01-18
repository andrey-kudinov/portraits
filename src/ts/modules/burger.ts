export const burger = (menuSelector: string, burgerSelector: string) => {
  const menuElement = document.querySelector<HTMLElement>(menuSelector),
    burgerElement = document.querySelector<HTMLElement>(burgerSelector)

  menuElement.style.display = 'none'
  
  burgerElement.addEventListener('click', () => {
    if (menuElement.style.display === 'none' && window.screen.availWidth <= 992) {
      menuElement.style.display = 'block'
    } else {
      menuElement.style.display = 'none'
    }
  })

  window.addEventListener('resize', () => {
    if (window.screen.availWidth <= 992) {
      menuElement.style.display = 'none'
    }
  })
}

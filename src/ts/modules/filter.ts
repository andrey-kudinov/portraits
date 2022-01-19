export const filter = () => {
  const menu = document.querySelector<HTMLElement>('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    btnAll = menu.querySelector<HTMLElement>('.all'),
    btnLovers = menu.querySelector<HTMLElement>('.lovers'),
    btnChef = menu.querySelector<HTMLElement>('.chef'),
    btnGirl = menu.querySelector<HTMLElement>('.girl'),
    btnGuy = menu.querySelector<HTMLElement>('.guy'),
    btnGrandmother = menu.querySelector<HTMLElement>('.grandmother'),
    btnGranddad = menu.querySelector<HTMLElement>('.granddad'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll<HTMLElement>('.all'),
    markLovers = wrapper.querySelectorAll('.lovers'),
    markGirl = wrapper.querySelectorAll('.girl'),
    markChef = wrapper.querySelectorAll('.chef'),
    markGuy = wrapper.querySelectorAll('.guy'),
    no = document.querySelector<HTMLElement>('.portfolio-no')

  const typeFilter = (markType?: NodeListOf<Element> | NodeListOf<HTMLElement>) => {
    markAll.forEach(mark => {
      mark.style.display = 'none'
      mark.classList.remove('animated', 'fadeIn')
    })

    no.style.display = 'none'
    no.classList.remove('animated', 'fadeIn')

    if (markType) {
      markType.forEach((mark: HTMLElement) => {
        mark.style.display = 'block'
        mark.classList.add('animated', 'fadeIn')
      })
    } else {
      no.style.display = 'block'
      no.classList.add('animated', 'fadeIn')
    }
  }

  btnAll.onclick = () => typeFilter(markAll)
  btnLovers.onclick = () => typeFilter(markLovers)
  btnGirl.onclick = () => typeFilter(markGirl)
  btnChef.onclick = () => typeFilter(markChef)
  btnGuy.onclick = () => typeFilter(markGuy)
  btnGrandmother.onclick = () => typeFilter()
  btnGranddad.onclick = () => typeFilter()

  menu.onclick = (event: any) => {
    const target = event.target

    if (target && target.tagName === 'LI') {
      items.forEach(item => item.classList.remove('active'))
      target.classList.add('active')
    }
  }
}

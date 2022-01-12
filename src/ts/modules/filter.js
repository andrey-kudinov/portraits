export const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    btnAll = menu.querySelector('.all'),
    btnLovers = menu.querySelector('.lovers'),
    btnChef = menu.querySelector('.chef'),
    btnGirl = menu.querySelector('.girl'),
    btnGuy = menu.querySelector('.guy'),
    btnGrandmother = menu.querySelector('.grandmother'),
    btnGranddad = menu.querySelector('.granddad'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    markLovers = wrapper.querySelectorAll('.lovers'),
    markGirl = wrapper.querySelectorAll('.girl'),
    markChef = wrapper.querySelectorAll('.chef'),
    markGuy = wrapper.querySelectorAll('.guy'),
    no = document.querySelector('.portfolio-no')

  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = 'none'
      mark.classList.remove('animated', 'fadeIn')
    })

    no.style.display = 'none'
    no.classList.remove('animated', 'fadeIn')

    if (markType) {
      markType.forEach(mark => {
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

  menu.onclick = (event) => {
    const target = event.target

    if (target && target.tagName === 'LI') {
      items.forEach(item => item.classList.remove('active'))
      target.classList.add('active')
    }
  }
}

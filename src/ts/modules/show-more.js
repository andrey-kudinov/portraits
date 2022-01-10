import { getData } from "../services/requests"

export const showMore = (trigger, wrapper) => {
  const button = document.querySelector(trigger)

    // cards.forEach(card => {
    //   card.classList.add('animated', 'fadeIn')
    // })

    // button.addEventListener('click', () => {
    //   cards.forEach(card => {
    //     card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs')
    //     card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
    //   })
    //   button.remove()
    // })

  const createCards = (data) => {
    data.forEach(card => {
      const {title, src, link} = card
      const cardHtml = document.createElement('div')
      cardHtml.classList.add('animated', 'fadeIn', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
    
      cardHtml.innerHTML = `
        <div class='styles-block'>
          <img src=${src} alt=${title}>
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
        </div>
      `

      document.querySelector(wrapper).appendChild(cardHtml)
    })
  }

  button.addEventListener('click', function() {
    // getData('http://localhost:4000/styles')
      // .then(res => createCards(res))
    getData('assets/db.json')
      .then(response => createCards(response.styles))
      .catch(error => console.log(error))

    this.remove()
  })
}

export const forms = () => {
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    uploads = document.querySelectorAll<HTMLInputElement>('[name="upload"]')

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  }

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  }

  const postData = async (url: string, data: FormData) => {
    const options = {
      method: 'POST',
      body: data
    }

    const response = await fetch(url, options)

    return await response.text()
  }

  const clearInputs = () => {
    inputs.forEach(input => input.value = '')
    uploads.forEach(upload => {
      upload.previousElementSibling.textContent = 'Файл не выбран'
    })
  }

  uploads.forEach(upload => {
    upload.addEventListener('input', () => {
      const file = upload.files[0]
      console.log('file -', file) // ! console.log()
      const fileName = file.name.split('.')[0]
      const fileType = file.name.split('.')[1]
      const dots = fileName.length > 6 ? '...' : '.'
      const name = `${fileName.substring(0, 6)}${dots}${fileType}`
      upload.previousElementSibling.textContent = name
    })
  });

  forms.forEach(form => {
    form.addEventListener('submit', async event => {
      event.preventDefault()

      const statusMessage = document.createElement('div')
      statusMessage.classList.add('status')
      form.parentNode.appendChild(statusMessage)
      form.classList.add('animated', 'fadeOutUp')

      setTimeout(() => {
        form.style.display = 'none'
      }, 400);

      const statusImg = document.createElement('img')
      statusImg.setAttribute('src', message.spinner)
      statusImg.classList.add('animated', 'fadeInUp')
      statusMessage.appendChild(statusImg)
      console.log(statusImg,statusMessage);

      const textMessage = document.createElement('div')
      textMessage.textContent = message.loading
      statusMessage.appendChild(textMessage)

      const formData = new FormData(form)
      const api = form.closest('.popup-design') || form.classList.contains('calc-form') ? path.designer : path.question
      console.log('api -', api) // ! console.log()

      try {
        const result = await postData(api, formData)
        console.log('result -', result) // ! console.log()
        statusImg.setAttribute('src', message.ok)
        statusMessage.textContent = message.success
      } catch {
        console.log(Error)
        statusImg.setAttribute('src', message.fail)
        statusMessage.textContent = message.failure
      }

      clearInputs()
      setTimeout(() => {
        statusMessage.remove()
        form.style.display = 'block'
        form.classList.remove('fadeOutUp')
        form.classList.add('fadeInUp')
      }, 5000)
    })
  })
}

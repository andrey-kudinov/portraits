export const drop = (): void => {
  const fileInputs = document.querySelectorAll('[name="upload"]')

  const preventDefaults = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
  }

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false)
    })
  })

  const highlight = (item: Element) => {
    item.closest<HTMLElement>('.file_upload').style.border = '5px solid tomato'
    item.closest<HTMLElement>('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .7)'
  }

  const unHighlight = (item: Element) => {
    item.closest<HTMLElement>('.file_upload').style.border = 'none'
    if (item.closest('.calc_form')) {
      item.closest<HTMLElement>('.file_upload').style.backgroundColor = '#fff'
    } else {
      item.closest<HTMLElement>('.file_upload').style.backgroundColor = '#ededed'
    }
  } 

  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false)
    })
  });

  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unHighlight(input), false)
    })
  })

  fileInputs.forEach((input: HTMLInputElement) => {
      input.addEventListener('drop', (e) => {
        console.log('drop');
        
        input.files = e.dataTransfer.files
        const file = input.files[0],
          fileName = file.name.split('.')[0],
          fileType = file.name.split('.')[1],
          dots = fileName.length > 6 ? '...' : '.',
          name = `${fileName.substring(0, 6)}${dots}${fileType}`

        input.previousElementSibling.textContent = name
      })
  })


}

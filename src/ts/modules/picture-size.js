export const pictureSize = (selector) => {
  const blocks = document.querySelectorAll(selector)

  const showImage = (block) => {
    const image = block.querySelector('img')
    image.src = image.src.slice(0, -4) + '-1.png'
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none'
    });
  }

  const hideImage = (block) => {
    const image = block.querySelector('img')
    image.src = image.src.slice(0, -6) + '.png'
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block'
    });
  }

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImage(block)
    })

    block.addEventListener('mouseout', () => {
      hideImage(block)
    })
  })
}

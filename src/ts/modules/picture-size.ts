export const pictureSize = (selector: string) => {
  const blocks = document.querySelectorAll(selector)

  const showImage = (block: Element) => {
    const image = block.querySelector('img')
    image.src = image.src.slice(0, -4) + '-1.png'
    block.querySelectorAll<HTMLElement>('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none'
    });
  }

  const hideImage = (block: Element) => {
    const image = block.querySelector('img')
    image.src = image.src.slice(0, -6) + '.png'
    block.querySelectorAll<HTMLElement>('p:not(.sizes-hit)').forEach(p => {
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

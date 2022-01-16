interface IProps {
  size: string
  material: string
  options: string
  promocode: string
  result: string
}

export const calc = (args: IProps) => {
  const { size, material, options, promocode, result } = args,
    sizeBlock = document.querySelector<HTMLInputElement>(size),
    materialBlock = document.querySelector<HTMLInputElement>(material),
    optionsBlock = document.querySelector<HTMLInputElement>(options),
    promocodeBlock = document.querySelector<HTMLInputElement>(promocode),
    resultBlock = document.querySelector<HTMLElement>(result)

  let sum = 0

  const calcSum = () => {
    sum = Math.round(
      +sizeBlock.value * +materialBlock.value + +optionsBlock.value
    )

    if (!sizeBlock.value || !materialBlock.value) {
      resultBlock.textContent = 'Выберите размер и материал картины!'
      return
    }

    if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = String(Math.round(sum * 0.7))
    } else {
      resultBlock.textContent = String(sum)
    }
  }

  sizeBlock.addEventListener('change', calcSum)
  materialBlock.addEventListener('change', calcSum)
  optionsBlock.addEventListener('change', calcSum)
  promocodeBlock.addEventListener('input', calcSum)
}

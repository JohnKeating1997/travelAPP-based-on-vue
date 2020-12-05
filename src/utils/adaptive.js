const designWidth = 375
const designFontSize = 16

export function getFontSize () {
  const { clientWidth } = document.documentElement
  const fontSize = clientWidth / designWidth * designFontSize
  return fontSize
}

function adjustFontSize () {
  const htmlEle = document.querySelector('html')
  let fontSize = getFontSize()
  htmlEle.style.fontSize = `${fontSize}px`

  window.onresize = () => {
    fontSize = getFontSize()
    htmlEle.style.fontSize = `${fontSize}px`
  }
}
adjustFontSize()

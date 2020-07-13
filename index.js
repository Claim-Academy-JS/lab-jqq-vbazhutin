import { Picker, InputColor, OutputColor, Slider, Switch } from './components'

import convert from 'color-convert'

function render () {
  document.querySelector('#root').innerHTML = `
  ${Picker()}
  ${Switch()}
  ${Slider()}
  ${InputColor()}
  ${OutputColor()}
  `

  const colorPicker = document.querySelector('#colorPicker')
  const HTMLRoot = document.querySelector(':root')
  const toggle = document.querySelector('#switch')
  const labels = document.querySelector('.switch-container').querySelectorAll('label')
  const slider = document.querySelector('#colorSlider')
  const sliderText = document.querySelector('#sliderText')

  colorPicker.addEventListener('input', function () {
    HTMLRoot.style.setProperty('--input-color', this.value)
    HTMLRoot.style.setProperty('--output-color', this.value)
  })

  toggle.addEventListener('change', function () {
    labels.forEach(label => {
    // DO NOT inclide the '.' when using classlist
      label.classList.toggle('isActive')
    })
  })

  // Slider 0 - 100%
  slider.addEventListener('input', function () {
    sliderText.innerText = slider.value + '%'
  })
}

render()

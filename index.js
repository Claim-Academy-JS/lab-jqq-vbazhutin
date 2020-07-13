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
  // defining variables
  const colorPicker = document.querySelector('#colorPicker')
  const HTMLRoot = document.querySelector(':root')
  const toggle = document.querySelector('#switch')
  const labels = document.querySelector('.switch-container').querySelectorAll('label')
  const slider = document.querySelector('#colorSlider')
  const sliderText = document.querySelector('#sliderText')

  colorPicker.addEventListener('input', function () {
    reset ()
    HTMLRoot.style.setProperty('--input-color', this.value)
    HTMLRoot.style.setProperty('--output-color', this.value)
  })

  //Resets slider value and text to '0'
  function reset () {}
  slider.value = 0
  sliderText.innerText = 0 + '%'
}

  toggle.addEventListener('change', function () {
    labels.forEach(label => {
      // DO NOT inclide the '.' when using classlist
      label.classList.toggle('isActive')
    })
  })

  // Add listener to lsiten to Lighten/Darken switch button

  // Slider 0 - 100%, Plus output color into output color bar
  slider.addEventListener('input', function () {
    sliderText.innerText = slider.value + '%'
    console.log(colorPicker.value)

    // converting HEX to HSL and takeing HUE, SATURATION values
    const hsl = convert.hex.hsl(colorPicker.value)
    const h = hsl[0]
    const s = hsl[1]
    const l = slider.value
    console.log(h, s, l)
    console.log(convert.hsl.hex(h, s, l))

    // Converting received data back to hex to assign HEX value to the output bar
    HTMLRoot.style.setProperty('--output-color', '#' + convert.hsl.hex(h, s, l))
  })
}

render()

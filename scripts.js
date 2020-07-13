const inputColor = document.querySelector('#colorPicker')
const outputColor = document.querySelector('#outputColor')
const HTMLRoot = document.querySelector(':root')
const toggleSwitch = document.querySelector('#switch')
const labels = document.querySelector('.switch-container').querySelectorAll('label')
const slider = document.querySelector('#color-slider')
const sliderText = document.querySelector('#slider-text')

console.log(sliderText)
console.log(slider.value)

// Changing input and output color containers according to the input color value
inputColor.addEventListener('input', function () {
  HTMLRoot.style.setProperty('--input-color', this.value)
  HTMLRoot.style.setProperty('--output-color', this.value)
  console.log(this.value)
})

// Changing Lighten/Darken text color whenever the switch is toggled.
toggleSwitch.addEventListener('change', function () {
  labels.forEach(label => {
    label.classList.toggle('isActive')
  })
})

// Slider
slider.addEventListener('input', function () {
  sliderText.innerText = slider.value + '%'
  console.log(slider.value)
})

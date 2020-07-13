const colorPicker = document.querySelector('#colorPicker')
const HTMLRoot = document.querySelector(':root')
const toggleSwitch = document.querySelector('#switch')
const labels = document.querySelector('.switch-container').querySelectorAll('label')

// Changing input and output color containers according to the input color value
colorPicker.addEventListener('input', function () {
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

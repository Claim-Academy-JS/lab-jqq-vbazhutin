const colorPicker = document.querySelector('#colorPicker')
const HTMLRoot = document.querySelector(':root')
const toggle = document.querySelector('#switch')
const labels = document.querySelector('.switch-container').querySelectorAll('label')

colorPicker.addEventListener('input', function () {
  HTMLRoot.style.setProperty('--input-color', this.value)
  HTMLRoot.style.setProperty('--input-color', this.value)
    .console.log(this.value)
})

toggle.addEventListener('change', function () {
  labels.forEach(label => {
    // DO NOT inclide the '.' when using classlist
    label.classList.toggle('isActive')
  })
})

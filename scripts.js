const inputColor = document.querySelector('#colorPicker')
const outputColor = document.querySelector('#outputColor')
const HTMLRoot = document.querySelector(':root')
const toggleSwitch = document.querySelector('#switch')
const labels = document.querySelector('.switch-container').querySelectorAll('label')
const slider = document.querySelector('#color-slider')
const sliderText = document.querySelector('#slider-text')

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

// Slider 0 - 100%
slider.addEventListener('input', function () {
  sliderText.innerText = slider.value + '%'
  HTMLRoot.style.setProperty = ('--output-color', hslToHex(hexToHsl(inputColor.value)))
})

function hexToHsl (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  var r = parseInt(result[1], 16)
  var g = parseInt(result[2], 16)
  var b = parseInt(result[3], 16)

  r /= 255
  g /= 255
  b /= 255
  var max = Math.max(r, g, b); var min = Math.min(r, g, b)
  var h; var s; var l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    var d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  s = s * 100
  s = Math.round(s)
  l = l * 100
  l = Math.round(l)
  console.log(h, s, l)
  return h + s + l
}

function hslToHex (h, s, l) {
  s /= 100
  l /= 100
  console.log(h, s, l)
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs((h / 60) % 2 - 1))
  const m = l - c / 2
  let r = 0
  let g = 0
  let b = 0

  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; b = x
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16)
  g = Math.round((g + m) * 255).toString(16)
  b = Math.round((b + m) * 255).toString(16)

  // Prepend 0s, if necessary
  if (r.length === 1) { r = '0' + r }
  if (g.length === 1) { g = '0' + g }
  if (b.length === 1) { b = '0' + b }
  console.log(r, g, b)
  return '#' + r + g + b
}

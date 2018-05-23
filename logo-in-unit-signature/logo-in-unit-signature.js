document.addEventListener('DOMContentLoaded', function (event) {
  document.getElementById('ubc7-unit-faculty').innerHTML = ''
  document.getElementById('ubc7-unit-identifier').innerHTML = ''

  const img = document.createElement('img')
  img.src = 'http://beatymuseum.sites.olt.ubc.ca/files/2016/01/beaty-logo-horizontal-white.png'
  img.className = 'logo'
  document.getElementById('ubc7-unit-faculty').parentElement.appendChild(img)
})

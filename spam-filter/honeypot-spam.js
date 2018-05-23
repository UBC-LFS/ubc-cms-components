document.addEventListener('DOMContentLoaded', function (event) {
  var input = document.createElement('input')
  input.setAttribute('style', 'display:none;')
  input.setAttribute('type', 'text')
  input.setAttribute('id', 'inputHide')

  document.getElementsByClassName('gform_body')[0].appendChild(input)

  document.getElementById('inputHide').oninput = function () {
    var button = document.getElementsByClassName('gform_button')[0]
    button.parentNode.removeChild(button)
  }
})

document.addEventListener('DOMContentLoaded', function (event) {
  document.getElementById('search').oninput = function () {
    var matcher = new RegExp(document.getElementById('search').value, 'gi')
    for (var i = 0; i < document.getElementsByClassName('box').length; i++) {
      if (matcher.test(document.getElementsByClassName('box-name')[i].innerHTML) ||
                    matcher.test(document.getElementsByClassName('details')[i].innerHTML) ||
                    matcher.test(document.getElementsByClassName('tags')[i].innerHTML)) {
        document.getElementsByClassName('box')[i].style.display =
                         'inline-block'
      } else {
        document.getElementsByClassName('box')[i].style.display = 'none'
      }
    }
  }
})

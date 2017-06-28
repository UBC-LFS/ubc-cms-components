document.addEventListener("DOMContentLoaded", function (event) {
     var sources = document.getElementsByClassName('sourceLink')
     var targets = document.getElementsByClassName('targetLink')
     Array.prototype.forEach.call(sources, function(source, i) {
          var a = document.createElement('a')
          a.href = source.children[0].href
          a.appendChild(targets[i].children[0])
          var wrapper = a.outerHTML
          document.getElementsByClassName('targetLink')[i].innerHTML = wrapper
     })
})

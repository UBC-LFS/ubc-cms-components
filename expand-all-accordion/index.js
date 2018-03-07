document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('expandAll')
  let clicked = 0
  button.addEventListener('click', function() {
    const accContainer = document.getElementsByClassName('accordion-container')[0]
    const accGroups = Array.from(accContainer.children)
    if (clicked % 2 === 0) {
      accGroups.forEach(accGroup => {
        const content = accGroup.children[1]
        content.setAttribute('style', 'height: auto;')
      })
      button.innerHTML = 'Collapse All'
    } else {
      accGroups.forEach(accGroup => {
        const content = accGroup.children[1]
        content.setAttribute('style', 'height: 0;')
      })
      button.innerHTML = 'Expand All'
    }
    clicked++
  })
})
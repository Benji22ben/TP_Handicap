let cursor = document.getElementById('cursor')

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 50/2 + 'px'
  cursor.style.top = e.clientY + 50/2 + 'px'
})

console.log(cursor)
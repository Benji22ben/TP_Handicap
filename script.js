const cursor = document.getElementById('cursor')
const elementHover = document.querySelectorAll('.hover-this')

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 30 / 2 + 'px'
  cursor.style.top = e.clientY - 30 / 2 + 'px'
})

console.log(cursor)
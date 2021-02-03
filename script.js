let cursor = document.getElementById('cursor')

window.addEventListener('mousemove', (e) => {
  console.log(e);
  cursor.style.transform.translateX = e.clientX;
  cursor.style.transform.translateY = e.clientY;
})
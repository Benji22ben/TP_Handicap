const cursor = document.querySelector('.cursor')
const elementHover = document.querySelectorAll('.hover-this')

// window.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.clientX - 30 / 2 + 'px'
//   cursor.style.top = e.clientY - 30 / 2 + 'px'
// })

document.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

console.log(cursor)
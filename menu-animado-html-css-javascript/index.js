const navBar = document.querySelector('.navbar')
const allLi = document.querySelectorAll('li')

allLi.forEach((li, index) => {
    li.addEventListener("click", ev => {
        navBar.querySelector(".ativado-lista").classList.remove("ativado-lista")
        li.classList.add("ativado-lista")

        const indicador = document.querySelector(".indicador")
        indicador.style.transform = `translateX(calc(${index * 90}px))`
    })
})
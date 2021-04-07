const nav = document.querySelector(".nav")

const fixNav =()=>{
    window.scrollY > 100 ? nav.classList.add("active") : nav.classList.remove("active")
}
window.addEventListener("scroll", fixNav)




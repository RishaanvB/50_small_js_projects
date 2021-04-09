const btn = document.querySelector(".btn")
const toast = document.getElementById("toast")




let messages = "message one, message two, message three, message four"
messages = messages.split(",")

const getRandomMsg = ()=> messages[Math.floor(Math.random()* messages.length)]


const createNotification =()=>{
    console.log("btn clicked");
    const div = document.createElement("div")
    div.classList.add("toast")
    div.innerHTML = getRandomMsg()
    
    toast.appendChild(div)

    setTimeout(() => {
        div.remove()
    }, 2000);

}
btn.addEventListener("click", ()=>createNotification())



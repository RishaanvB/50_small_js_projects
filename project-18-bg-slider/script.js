const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const slides = document.querySelectorAll(".slider");
const section = document.getElementById("section");

let activeSlide = 0;

const setBgToBody = () => {
  section.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};
setBgToBody();


const setActiveSlide = () => {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[activeSlide].classList.add("active")
};

rightBtn.addEventListener("click", ()=>{
    activeSlide >= slides.length -1 ? activeSlide = 0 : ++activeSlide
    console.log(activeSlide);   
    setActiveSlide()
    setBgToBody();    
})

leftBtn.addEventListener("click", ()=>{
    activeSlide == 0 ? activeSlide = slides.length -1 : --activeSlide
    console.log(activeSlide);   

    setActiveSlide()
    setBgToBody(); 
})

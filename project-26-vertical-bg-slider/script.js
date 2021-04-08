const sliderContainer = document.querySelector(".slider-container")
const rightSlide  = document.querySelector(".right-slide")
const leftSlide = document.querySelector(".left-slide")
const upBtn = document.querySelector(".up-btn")
const downBtn = document.querySelector(".down-btn")
const slidesLength = rightSlide.querySelectorAll("div").length


let activeSlideIndex = 0


leftSlide.style.top = `-${(slidesLength - 1) *100 }vh`

const changeSlide =(direction)=>{
    const sliderHeight = sliderContainer.clientHeight
    if (direction === "up") {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    }

    if (direction === "down") {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = (slidesLength - 1)
        }
    }

console.log(activeSlideIndex);

    rightSlide.style.transform = `translateY(-${activeSlideIndex* sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

upBtn.addEventListener("click",()=>changeSlide("up"))
downBtn.addEventListener("click",()=>changeSlide("down"))
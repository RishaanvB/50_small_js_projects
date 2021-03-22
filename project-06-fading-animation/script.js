const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", moveBox);

function moveBox() {
  const trigger = (window.innerHeight / 100) * 99;
  console.log(trigger, "triger");
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop, "boxtop");
    boxTop < trigger ? box.classList.add("show") : box.classList.remove("show") 
  });
}

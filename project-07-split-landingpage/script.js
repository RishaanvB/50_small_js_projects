const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");

leftSide.addEventListener("mouseover", () => {
  leftSide.classList.add("hover-left");
  rightSide.classList.add("hover-left");
});

leftSide.addEventListener("mouseout", () => {
  leftSide.classList.remove("hover-left");
  rightSide.classList.remove("hover-left");
});

rightSide.addEventListener("mouseover", () => {
  leftSide.classList.add("hover-right");
  rightSide.classList.add("hover-right");
});

rightSide.addEventListener("mouseout", () => {
  leftSide.classList.remove("hover-right");
  rightSide.classList.remove("hover-right");
});

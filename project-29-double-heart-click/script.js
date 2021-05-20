const container = document.querySelector(".img-container");
const times = document.querySelector("#times");
let timesClicked = 0;
const showHeart = (e) => {
  const y = e.clientY;
  const x = e.clientX;
  const imgTop = e.target.offsetTop;
  const imgLeft = e.target.offsetLeft;
  const top = y - imgTop;
  const left = x - imgLeft;
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  container.appendChild(heart);
  heart.style.top = `${top}px`;
  heart.style.left = `${left}px`;
  times.innerHTML = ++timesClicked;
  setTimeout(() => {
    heart.remove();
  }, 400);
};

container.addEventListener("dblclick", showHeart);

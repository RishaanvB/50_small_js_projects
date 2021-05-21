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
  const heart = `<i class="fas fa-heart" style="top:${top}px; left:${left}px"></i>`;
  container.insertAdjacentHTML("beforeend", heart);

  times.innerHTML = ++timesClicked;
  setTimeout(() => {
    container.firstChild.remove();
  }, 400);
};

container.addEventListener("dblclick", showHeart);

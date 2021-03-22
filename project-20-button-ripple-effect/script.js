const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  btnTop = e.target.offsetTop;
  btnLeft = e.target.offsetLeft;
  const styleLeft = x - btnLeft;
  const styleTop = y - btnTop;
  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = `${styleTop}px`;
  circle.style.left = `${styleLeft}px`;

  this.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
});

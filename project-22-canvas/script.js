const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const cursorSize = document.getElementById("size");
const clearCanvas = document.getElementById("clear");
const colorPicker = document.getElementById("color");

let size = 5;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (moveFrom, moveTo, drawFrom, drawTo) => {
  ctx.beginPath();
  ctx.moveTo(moveFrom, moveTo);
  ctx.lineTo(drawFrom, drawTo);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

colorPicker.addEventListener("change", (e) => (color = e.target.value));

increaseBtn.addEventListener("click", () => {
  ++size;
  cursorSize.innerText = size;
});

decreaseBtn.addEventListener("click", () => {
  --size;
  cursorSize.innerText = size;
});
clearCanvas.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
// drawCircle(100, 200);
drawLine(0, 0, 400, 400);

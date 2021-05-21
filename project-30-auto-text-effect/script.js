const textEl = document.querySelector("h1");
const speedEl = document.getElementById("speed");
const text = "This text types itself!!!";

let idx = 1;
let speed = 300 / speedEl.value;

const writeText = () => {
  console.log(speed);
  textEl.innerText = text.slice(0, idx);
  ++idx;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(() => {
    writeText();
  }, speed);
};
writeText()

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));

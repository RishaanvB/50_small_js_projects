const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

const dragStart = (e) => {
  console.log("dragstart");

  e.target.className += " hold";
  setTimeout(() => (e.target.className = "invisible"), 1);
};

const dragEnd = (e) => {
  e.target.className = "fill";

  console.log("dragend");
};
const dragOver = (e) => {
  e.preventDefault();
  console.log("dragover");
};

const dragEnter = (e) => {
  e.preventDefault();

  e.target.className += " hovered";

  console.log("dragenter");
};

const dragLeave = (e) => {
  console.log("dragleave");
  e.target.className = "empty";
};

const dragDrop = (e) => {
  e.target.className = "empty";
  console.log("dragdrop");
  e.target.append(fill);
};
empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

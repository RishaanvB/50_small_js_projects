const tagsEl = document.querySelector(".tags-container");
const textarea = document.querySelector("textarea");

textarea.focus();
textarea.addEventListener("keyup", (e) => {
  textarea.innerText = "";
  createTags(e.target.value);
  if (e.key === "Enter") {
    e.target.value = "";
    randomSelect();
  }
});

function randomSelect() {
  console.log("random select");
  const timeToRandomize = 30;
  const times = 50;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, timeToRandomize);
  }, timeToRandomize);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 1);
  }, times * timeToRandomize);
}
function pickRandomTag() {
  const tags = document.querySelectorAll(".tags");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
function createTags(letter) {
  const tags = letter
    .split(" ")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tags");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

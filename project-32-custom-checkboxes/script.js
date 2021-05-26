const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");
const toggles = document.querySelectorAll(".toggle");

const doTheTrick = (clickedOne) => {
  if (good.checked && cheap.checked && fast.checked) {
    good === clickedOne && (fast.checked = false);
    fast === clickedOne && (cheap.checked = false);
    cheap === clickedOne && (good.checked = false);
  }
};

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    doTheTrick(e.target);
  });
});

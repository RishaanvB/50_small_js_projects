const eyeCon = document.querySelector(".fa-eye");
const eyeConSlash = document.querySelector(".fa-eye-slash");
const password = document.getElementById("password");

eyeConSlash.addEventListener("mousedown", () => (password.type = "text"));
eyeCon.addEventListener("mouseup", () => (password.type = "password"));
eyeCon.addEventListener("mouseleave", () => (password.type = "password"));

const labels = document.querySelectorAll("label");

labels.forEach(
  (label) =>
    (label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, index) =>
          `<span style="transition-delay:${index * 40}ms">${letter}</span>`
      )
      .join(""))
);

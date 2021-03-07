const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  //   const code = e.code;
  //   let key = e.key;

  //   if (key == " ") {
  //     key = "space";
  //   }
  console.log(e.code);
  console.log(e.key);
  insert.innerHTML = `<div class="key">
    ${e.key === " " ? "spacebar" : e.key}
    <small>event.key</small>
  </div>
  <div class="key">
  ${e.code}
    <small>event.code</small>
  </div>`;
});

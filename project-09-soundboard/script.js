let sounds = "dolphin tiger monkey";
sounds = sounds.split(" ");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

const stopSound = ()=> {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

const stopBtn = document.getElementById("stop")
stopBtn.addEventListener("click", stopSound)
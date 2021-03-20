toggle.addEventListener("click", () => {
  const html = document.getElementById("html");
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  html.classList.toggle("dark");
  toggle.classList.toggle("dark");
  if (toggle.classList.contains("dark")) {
    toggle.innerText = "Light Mode";
    hour.style.backgroundColor = "white";
    minute.style.backgroundColor = "white";
  } else {
    toggle.innerText = "Dark Mode";
    hour.style.backgroundColor = "black";
    minute.style.backgroundColor = "black";
  }
});

const weekDays = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday".split(
  ","
);
const monthInYears = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(
  ","
);

const setTime = () => {
  const timeEl = document.querySelector(".time");
  const dateEl = document.querySelector(".date");
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const monthName = monthInYears[month];
  const dayName = weekDays[day];
  const dayOfTheWeek = time.getDate();
  timeEl.innerText = `${hours}:${minutes.toString().padStart(2, 0)}`;
  dateEl.innerText = `${dayName}, ${monthName} ${dayOfTheWeek}`;

  const hourNeedle = document.getElementById("hour");
  const minuteNeedle = document.getElementById("minute");
  const secondNeedle = document.getElementById("second");
  hourNeedle.style.transform = `rotate(${180 + (hours % 12) * 30}deg)`;
  minute == 0
    ? (minuteNeedle.style.transform = `rotate{0deg)`)
    : (minuteNeedle.style.transform = `rotate(${180 + minutes * 6}deg)`);

  secondNeedle.style.transform = `rotate(${180 + seconds * 6}deg)`;
};

// setTime();
setInterval(() => {
  setTime();
  console.log("tick tock");
}, 1000);

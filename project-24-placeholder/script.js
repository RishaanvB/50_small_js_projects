const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const namee = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedText = document.querySelectorAll(".animated-text");

const getData = () => {
  header.innerHTML = `<img src="https://source.unsplash.com/random" alt="" />`;
  title.innerHTML = `Card Title`;
  excerpt.innerHTML = `Some text underneath the card title`;
  profileImg.innerHTML = ` <img
    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    alt=""
  />`;
  namee.innerHTML = `Jane Doe`;
  date.innerHTML = `March 3d, 2019`;
  animatedBgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animatedText.forEach((text) => text.classList.remove("animated-text"));
};


setTimeout(getData, 2000)
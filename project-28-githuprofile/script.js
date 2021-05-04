// const axios = require("axios")

const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// gets data from api
const getUser = async (username) => {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// gets repo data from api
const getRepos = async (username) => {
  try {
    const { data } = await axios(API_URL + username + "/repos");
    addReposToCard(data);
  } catch (error) {
    console.log(error);
  }
};

const addReposToCard = (repos) => {
    const reposEl = document.getElementById("repos")
    repos.slice(0,3).forEach(repo=>{
        const repoEl = document.createElement("a")
        repoEl.classList.add("repo")
        repoEl.href = repo.html_url
        repoEl.target = "_blank"
        repoEl.innerHTML = repo.name

        reposEl.appendChild(repoEl)


    })
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

const createUserCard = (user) => {
  const { name, avatar_url, bio, following, followers, public_repos } = user;
  const card = document.querySelector(".card");

  card && card.remove();
  const displayBio = bio ? bio : "This user has no bio.";

  const cardHTML = ` 
  <div class="card">
  <div class="avatar-container">
    <img
      class="avatar"
      src="${avatar_url}"
      alt="${name}"
    />
  </div>
  <div class="user-info">
    <h2>${name}</h2>
    <p>
      ${displayBio}
    </p>
    <ul>
      <li>${followers} <strong>followers</strong></li>
      <li>${following} <strong>following</strong></li>
      <li>${public_repos} <strong>repos</strong></li>
    </ul>
    <div id="repos">
    </div>
  </div>
</div>
`;

  main.insertAdjacentHTML("beforebegin", cardHTML);
};

getUser("Bradtraversy");

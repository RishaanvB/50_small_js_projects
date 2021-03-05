console.log("working");
const joke = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

const getJoke = async ()  => {
  const url = "https://icanhazdadjoke.com";

  const config = {
    headers: { Accept: "application/json" },
  };

  const res = await fetch(url, config)
  const data = await res.json()
  joke.innerHTML = data.joke
   
};

// const getJoke =  () => {
//     console.log("button clicked");
//     const url = "https://icanhazdadjoke.com";
  
//     const config = {
//       headers: { Accept: "application/json" },
//     };
  
//     fetch(url, config)
//       .then((res) => res.json())
//       .then((data) => {
//           joke.innerHTML = data.joke
//       });
//   };


btn.addEventListener("click", getJoke);

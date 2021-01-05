const main = document.getElementById("root");
const fetchButton = document.getElementById("fetch");
const container = document.createElement("div");
container.setAttribute("class", "container");
main.appendChild(container);

const getFilms = () => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h2 = document.createElement("h2");
        h2.textContent = movie.title;

        const p = document.createElement("p");
        movie.description = movie.description.substring(0, 400);
        p.textContent = `${movie.description}...`;
        const p2 = document.createElement("p");
        container.appendChild(card);

        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(p2);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchButton.addEventListener('click', getFilms);
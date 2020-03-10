const main = document.getElementById("root");
const logo = document.createElement("img");
logo.src = "logo.png";
const container = document.createElement("div") /*creates new div*/
container.setAttribute("class", "container");

main.appendChild(logo);
main.appendChild(container);

const useFetchApi = () => {
  fetch("https://ghibliapi.herokuapp.com/films")
  .then(response => response.json())
  .then(data => {
    data.forEach(movie => {
      // Create a div with a card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // Create an h2 and set the text content to the film's title
      const h2 = document.createElement("h2");
      h2.textContent = movie.title;

      // Create a p and set the text content to the film's description
      const p = document.createElement("p");
      movie.description = movie.description.substring(0,400);
      p.textContent = `${movie.description}...`;
      const p2 = document.createElement("p");
      p2.textContent = "fetch API";

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an h1 and a p
      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(p2);

    });
  })
  .catch(error => {
    console.log(error)
  });
}


const usejQuery = () => {
  $(document).ready(function() {
    $.ajax({
      url: "https://ghibliapi.herokuapp.com/films",
      dataType: "json",
      success: function(data) {
        data.forEach(movie => {
          // Create a div with a card class
          const card = document.createElement("div");
          card.setAttribute("class", "card");
          // Create an h2 and set the text content to the film's title
          const h2 = document.createElement("h2");
          h2.textContent = movie.title;
          // Create a p and set the text content to the film's description
          const p = document.createElement("p");
          movie.description = movie.description.substring(0, 300); // Limit to 300 chars
          p.textContent = `${movie.description}...`; // End with an ellipses
          const p2 = document.createElement("p");
          p2.textContent = "jQuery";
          // Append the cards to the container element
          container.appendChild(card);
          // Each card will contain an h1 and a p
          card.appendChild(h2);
          card.appendChild(p);
          card.appendChild(p2);
        });
      }
    });
  });
}


$("#fetch").click(useFetchApi);
$("#jquery").click(usejQuery);

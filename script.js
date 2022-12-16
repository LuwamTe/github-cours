document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = document.getElementById("search_bar").value;

  searchFormat = userInput.replace(/\s+/g, "+").toLowerCase();

  axios
    .get(
      "https://api.themoviedb.org/3/search/movie?api_key=d891408aa52847468b922c20a9f9f09d&query=" +
        searchFormat
    )
    .then(function (response) {
      renderMovie(response.data.results[0]);
      renderMovie(response.data.results[1]);
      renderMovie(response.data.results[2]);
    })
    .catch(function (error) {
      console.error(error);
    });
});

let movieList = "";
function renderMovie(movies) {
  let title = movies.original_title;
  let releaseDate = movies.release_date;
  let overview = movies.overview;
  let image = "http://image.tmdb.org/t/p/w200/" + movies.poster_path;

  movieList += `
            <h1>${title}</h1>
            <p>${releaseDate}</p>
            <p>${overview}</p>
            <img src=${image}>
            `;

  document.getElementById("movie_list").innerHTML = movieList;
  document.getElementById("search_bar").value = "";
}

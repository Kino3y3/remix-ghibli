export async function getFilms(title) {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const films = await response.json();
  // return films;
  return films.filter((film) =>
  title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
  );
}

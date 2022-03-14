export async function getFilms() {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const films = await response.json();
  return films;
}

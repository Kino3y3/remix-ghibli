import React from "react";
import { useLoaderData } from "remix";
import { getFilms } from "~/api/films";

// SERVER SIDE
export const loader = async () => {
  //   const response = await fetch("https://ghibliapi.herokuapp.com/films");
  //   return response.json();
  return getFilms();
};

// CLIENT SIDE
export default function FilmIndex() {
  const films = useLoaderData();
  return (
    <div>
      Films
      <div className="grid grid-cols-4 gap-4">
        {films.map((film) => (
          <div className="cursor-pointer hover:scale-105 hover:font-bold hover:shadow-2xl">
            <div>{film.title}</div>
            <img src={film.image} alt={film.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export const meta = () => {
  return { title: "Films | Studio Ghibli", description: "List of films" };
};

export const links = () => {
  return [{ rel: "stylesheet", href: "styles" }];
};

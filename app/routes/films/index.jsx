import React from "react";
import { useLoaderData, Form } from "remix";
import { getFilms } from "~/api/films";

// SERVER SIDE
export const loader = async ({request}) => {
  const url = new URL(request.url)
  const title = url.searchParams.get('title')
  return getFilms(title);
};

// CLIENT SIDE
export default function FilmIndex() {
  const films = useLoaderData();
  return (<div className="p-16 font-sans">
      <h1 className="text-5xl font-bold text-center">Studio Ghibli Films</h1>
      <Form reloadDocument method="get" className="py-5">
        <label htmlFor="" className="font-bold">
          Search{` `}
          <input
            type="text"
            name="title"
            placeholder="Type a title..."
            className="border-2 rounded py-2 px-3"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Search
        </button>
      </Form>
      <div className="grid grid-cols-4 gap-4">
        {films.map((film) => (<div className="cursor-pointer hover:scale-105 hover:font-bold hover:shadow-2xl">
            <div>{film.title}</div>
            <img src={film.image} alt={film.title} />
          </div>))}
      </div>
    </div>);
}

export const meta = () => {
  return { title: "Films | Studio Ghibli", description: "List of films" };
};

export const links = () => {
  return [{ rel: "stylesheet", href: "styles" }];
};

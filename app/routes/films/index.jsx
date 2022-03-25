import React from "react";
import { useLoaderData, Form, Link } from "remix";
import { getFilms } from "~/api/films";
import Test from "~/components/Test";

// SERVER SIDE
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  return getFilms(title);
};

// CLIENT SIDE
export default function FilmIndex() {
  const films = useLoaderData();
  return (
    <div className="p-16 font-sans">
      <h1 className="text-center text-5xl font-bold">Studio Ghibli Films</h1>
      {/*<Test/>*/}
      <Form reloadDocument method="get" className="py-5">
        <label htmlFor="" className="font-bold">
          Search{` `}
          <input
            type="text"
            name="title"
            placeholder="Type a title..."
            className="rounded border-2 py-2 px-3"
          />
        </label>
        <button
          type="submit"
          className="mx-2 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Search
        </button>
      </Form>
      <div className="grid grid-cols-4 gap-4">
        {films.map((film) => (
          <Link
            title={film.title}
            key={film.id}
            to={film.id}
            className="cursor-pointer hover:scale-105 hover:font-bold hover:shadow-2xl"
            prefetch="intent"
          >
            <div>{film.title}</div>
            <img src={film.image} alt={film.title} />
          </Link>
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

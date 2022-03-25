import React from "react";
import { Outlet, useLoaderData } from "remix";
import { getFilmById } from "~/api/films";
import invariant from "tiny-invariant";
import FilmBanner from "~/components/FilmBanner";
import CharacterList from "~/components/CharacterList";

export const meta = ({ data }) => {
  return { title: data.title, description: data.description };
};

export const loader = async ({ params }) => {
  invariant(params.filmId, "expected params.filmId");

  const film = await getFilmById(params.filmId);

  console.log("fetching film... -->", film.title);

  return film;
};

export default function Film() {
  const film = useLoaderData();
  return (
    <div>
      <FilmBanner film={film} />

      <div className="p-10">
        <p>{film.description}</p>

        <div className="flex space-x-5 py-5">
          <CharacterList characters={film.characters} />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Outlet, redirect, useLoaderData } from "remix";
import { getFilmById } from "~/api/films";
import invariant from "tiny-invariant";
import FilmBanner from "~/components/FilmBanner";
import CharacterList from "~/components/CharacterList";
import CommentsList from "~/components/CommentsList";
import { addComment } from "~/api/comments";

export const action = async ({ request, params }) => {
  invariant(params.filmId, "expected params.filmId");
  const body = await request.formData();

  const comment = {
    name: body.get("name"),
    message: body.get("message"),
    filmId: params.filmId,
  };

  // const errors = { name: "", message: "" };
  //
  // if (!comment.name) {
  //   errors.name = "Please provide your name";
  // }
  //
  // if (!comment.message) {
  //   errors.message = "Please provide a comment";
  // }
  //
  // if (errors.name || errors.message) {
  //   const values = Object.fromEntries(body);
  //   return { errors, values };
  // }

  await addComment(comment);

  // console.log("body -->", Object.fromEntries(body));
  // return null;
  return redirect(`/films/${params.filmId}`);
};

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
          <div className="flex flex-1 flex-col justify-between">
            <Outlet />

            <CommentsList filmId={film.id} comments={film.comments || []} />
          </div>
        </div>
      </div>
    </div>
  );
}

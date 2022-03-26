import invariant from "tiny-invariant";
import { getFilmCharacter } from "~/api/films";
import { useCatch, useLoaderData } from "remix";

export let loader = async ({ params }) => {
  invariant(params.characterId, "expected params.characterId");

  // for ErrorBoundary
  // throw new Error("RANDOM ERROR!!");

  // throw new Response("Not Found", { status: 404 });
  // throw json("Different message", { status: 404 });

  return getFilmCharacter(params.characterId);
};

export default function Character() {
  const characterDetails = useLoaderData();
  return (
    <div className="mb-3">
      <div className="mb-2 text-3xl">Character Details</div>
      <div className="rounded border p-4 shadow-lg">
        <div className="mb-2 text-xl font-bold text-gray-700">
          {characterDetails.name}
        </div>
        <ul className="py-2">
          <li>Gender: {characterDetails.gender}</li>
          <li>Age: {characterDetails.age}</li>
          <li>Eye Color: {characterDetails.eye_color}</li>
          <li>Hair Color: {characterDetails.hair_color}</li>
        </ul>
      </div>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <div className="mb-3">
        <div className="mb-2 text-3xl">Details</div>
        <div className="rounded border border-orange-600 bg-orange-200 p-4 shadow-lg">
          <div className="mb-2 text-xl font-bold text-gray-700">
            {caught.statusText}
          </div>
          <p>
            {caught.status} {caught.statusText}
          </p>
        </div>
      </div>
    );
  }
  throw new Error("Unknown error");
}

export function ErrorBoundary({ error }) {
  return (
    <div className="mb-3">
      <div className="mb-2 text-3xl">Character Details</div>
      <div className="rounded border border-rose-600 bg-rose-200 p-4 shadow-lg">
        <div className="mb-2 text-xl font-bold text-gray-700">
          Uh oh... Sorry something went wrong!
        </div>
        <p>{error?.message}</p>
      </div>
    </div>
  );
}

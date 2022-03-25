import React from "react";
import { useLoaderData } from "remix";

export default function Test() {
  const films = useLoaderData();
  return (
    <>
      <div>Test</div>
      {films.map((film) => (
        <div key={film.id}>{film.title}</div>
      ))}
    </>
  );
}

import { Link } from "remix";

export default function CharacterList({ characters }) {
  return (
    <div className="max-w-md flex-1">
      <h3 className="text-3xl">Characters</h3>
      <ul className="my-3 flex flex-col space-y-3">
        {characters?.map((character) => (
          <li>
            <Link
              to={"characters/" + character.id}
              className="inline-block w-full rounded border border-slate-400 p-3 hover:underline"
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

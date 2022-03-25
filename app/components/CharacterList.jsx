import { Link, NavLink } from "remix";

export default function CharacterList({ characters }) {
  return (
    <div className="max-w-md flex-1">
      <h3 className="text-3xl">Characters</h3>
      <ul className="my-3 flex flex-col space-y-3">
        {characters?.map((character) => (
          <li key={character.id}>
            <NavLink
              to={"characters/" + character.id}
              className={({ isActive }) =>
                `inline-block w-full rounded border border-slate-400 p-3 hover:underline ${
                  isActive
                    ? `border-2 bg-slate-300 font-bold text-black`
                    : `text-blue-500`
                }`
              }
            >
              {character.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

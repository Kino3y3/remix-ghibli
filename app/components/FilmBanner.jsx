import { Link } from "remix";

export default function FilmBanner({ film }) {
  return (
    <div>
      <div className="relative h-96 w-full overflow-hidden">
        <div className="item-start absolute flex h-full w-full flex-col justify-between">
          <Link to="/films" className="p-5 text-2xl text-white hover:underline">
            Go Back
          </Link>
          <div className="bg-slate-700/60 p-5">
            <div className="text-6xl font-bold text-white">{film.title}</div>
          </div>
        </div>

        <img
          src={film.movie_banner}
          className="h-auto w-full"
          style={{ marginTop: -100 }}
          alt=""
        />
      </div>
    </div>
  );
}

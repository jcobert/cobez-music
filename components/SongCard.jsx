import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function SongCard(props) {
  const song = props.song;

  const listComponent = (
    <div className="shadow rounded-md">
      {/* Content */}
      <div className="border bg-slate-50 pb-4 md:pb-0 rounded-md">
        <div className="flex flex-col md:flex-row justify-center items-center px-4">
          {/* Artwork */}
          <div className="h-56 w-56 md:h-32 md:w-32 rounded flex items-center justify-center p-4 md:p-0 md:flex-grow-0">
            <div
              className="bg-contain bg-no-repeat bg-center rounded h-56 w-56 md:h-32 md:w-32"
              style={{
                backgroundImage: `url(${song.data.artwork})`,
                borderRadius: 5,
              }}
            ></div>
          </div>
          {/* Body */}
          <div className="flex flex-col items-center gap-y-4 md:pl-5 mt-3 md:mt-0 md:py-4 md:flex-1">
            {/* Title */}
            <div className="flex flex-col items-center md:items-start md:self-start text-center md:text-left">
              <h4 className="text-lg font-bold">{song.data.title}</h4>
              <h5 className="text-slate-800 font-bold">{song.data.artist}</h5>
            </div>
            {/* Description */}
            <div className="">
              <p>{song.data.description}</p>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-y-4">
              {/* Stream Links */}
              <div className="flex w-full md:w-9/12 items-center justify-around md:justify-evenly text-5xl md:text-3xl text-theme-tertiary p-2 md:p-1 flex-1">
                <a
                  className="hover:text-theme-primary transition"
                  href={song.data.links.spotify}
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
                <a
                  className="hover:text-theme-primary transition"
                  href={song.data.links.apple}
                >
                  <FontAwesomeIcon icon={faApple} />
                </a>
                <a
                  className="hover:text-theme-primary transition"
                  href={song.data.links.youtube}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
              {/* Learn More Button */}
              <div className="w-full text-center flex-1 mb-4 md:mb-0">
                <Link href={`/music/${song.slug}`}>
                  <a className="block mx-auto rounded-md p-4 md:p-2 md:w-6/12 w-10/12 sm:max-w-[12rem] bg-theme-primary hover:bg-theme-tertiary text-white text-lg md:text-base transition-all">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const gridComponent = (
    <div className="shadow rounded-md flex flex-col">
      {/* Content */}
      <div className="border bg-slate-50 pb-4 md:pb-0 rounded-md flex-1 flex flex-col justify-center items-center px-4">
        {/* Artwork */}
        <div className="h-56 w-56 flex items-center justify-center">
          <div
            className="bg-contain bg-no-repeat bg-center p-24"
            style={{
              backgroundImage: `url(${song.data.artwork})`,
              borderRadius: 5,
            }}
          ></div>
        </div>
        {/* Body */}
        <div className="flex flex-col items-center gap-y-4 mt-3 flex-1">
          {/* Title */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-bold">{song.data.title}</h4>
            <h5 className="text-slate-800 font-bold">{song.data.artist}</h5>
          </div>
          {/* Description */}
          <div className="md:text-center">
            <p>{song.data.description}</p>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-y-4 flex-1">
            {/* Stream Links */}
            <div className="flex w-full md:w-9/12 items-center justify-around text-5xl md:text-4xl text-theme-tertiary p-2 flex-1">
              <a
                className="hover:text-theme-primary transition"
                href={song.data.links.spotify}
              >
                <FontAwesomeIcon icon={faSpotify} />
              </a>
              <a
                className="hover:text-theme-primary transition"
                href={song.data.links.apple}
              >
                <FontAwesomeIcon icon={faApple} />
              </a>
              <a
                className="hover:text-theme-primary transition"
                href={song.data.links.youtube}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            {/* Learn More Button */}
            <div className="w-full text-center mb-4">
              <Link href={`/music/${song.slug}`}>
                <a className="block mx-auto rounded-md p-4 md:p-2 md:w-9/12 w-10/12 sm:max-w-[12rem] bg-theme-primary hover:bg-theme-tertiary text-white text-lg md:text-base transition-all">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return props.view === "grid" ? gridComponent : listComponent;
}

export default SongCard;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function SongCard(props) {
  const song = props.song;

  return (
    <div className="shadow">
      {/* Header */}
      {/* <div className="h-12 rounded-t-md bg-theme-primary flex items-center justify-center md:justify-start md:pl-4">
        <h1 className="text-white text-3xl md:text-3xl text-center md:text-left font-bellotaHeading font-bold">
          {props.header}
        </h1>
      </div> */}
      {/* Content */}
      <div className="border bg-slate-50 py-4 pt-0 rounded-md">
        <div className="flex flex-col md:flex-row justify-center items-center px-4">
          {/* Artwork */}
          <div className="h-56 w-56 flex items-center justify-center">
            <div
              className="bg-contain bg-no-repeat bg-center p-24"
              style={{ backgroundImage: `url(${song.data.artwork})` }}
            ></div>
          </div>
          {/* Body */}
          <div className="flex flex-col items-center gap-y-4 md:pl-5 mt-3">
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
              <div className="flex w-full md:w-9/12 items-center justify-around md:justify-evenly text-5xl md:text-4xl text-theme-tertiary p-2 flex-1">
                <a
                  className="hover:text-theme-secondary transition"
                  href={song.data.links.spotify}
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
                <a
                  className="hover:text-theme-secondary transition"
                  href={song.data.links.apple}
                >
                  <FontAwesomeIcon icon={faApple} />
                </a>
                <a
                  className="hover:text-theme-secondary transition"
                  href={song.data.links.youtube}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
              {/* Read More Button */}
              <div className="w-full text-center flex-1">
                <Link href={`/music/${song.slug}`}>
                  <a className="block mx-auto rounded-md p-4 md:p-2 md:w-8/12 w-10/12 sm:max-w-[12rem] bg-theme-primary hover:bg-theme-secondary text-white text-lg md:text-base transition-all">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;

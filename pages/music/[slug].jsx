import { getAllSongIds, getSongData } from "../../lib/songs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const credits = ["songwriter", "producer", "engineer"];

export async function getStaticPaths() {
  const paths = getAllSongIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { frontmatter, markdown } = getSongData(params.slug);
  return {
    props: {
      frontmatter,
      markdown,
    },
  };
}

function Music({ frontmatter, markdown }) {
  const song = frontmatter;
  const body = markdown;

  return (
    <div className="bg-white/95 pt-4 md:pt-12 pb-16 md:pb-2 min-h-screen">
      <div className="flex flex-col md:flex-row gap-x-4 justify-center items-center">
        {/* Album artwork */}
        <div className="w-8/12 sm:w-6/12 md:w-4/12 max-w-xs p-4">
          <Image
            src={song.artwork}
            width={500}
            height={500}
            layout="responsive"
            alt="Album artwork"
          />
        </div>
        {/* Info and Links */}
        <div className="w-full md:w-fit">
          {/* Title, Artist, Release Date */}
          <div className="flex flex-col gap-y-1 text-center pt-4 px-2">
            <h2 className="text-xl font-bold">{song.title}</h2>
            <h4 className="text-lg">{song.artist}</h4>
            <h6 className="text-sm text-theme-tertiary">{song.date}</h6>
          </div>
          {/* Credits */}
          <div className="py-4">
            <span className="block mx-auto w-10/12 border-b"></span>
            <div className="flex justify-center gap-x-1 py-4 px-6 flex-wrap">
              <span className="font-bold text-gray-700">Credits:</span>
              {credits.map((credit, i) => {
                let delimiter = ",";
                if (i === credits.length - 1) {
                  delimiter = "";
                }
                return <span>{`${credit}${delimiter}`}</span>;
              })}
            </div>
            <span className="block mx-auto w-10/12 border-b"></span>
          </div>
          {/* Stream Links */}
          <div className="flex justify-around md:justify-center md:gap-x-16 text-4xl md:text-3xl text-theme-tertiary md:mt-4 p-2">
            <a href={song.links.spotify}>
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a href={song.links.apple}>
              <FontAwesomeIcon icon={faApple} />
            </a>
            <a href={song.links.youtube}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="md:w-10/12 xl:w-8/12 max-w-5xl p-4 mx-auto md:mt-4 lg:mt-12">
        <ReactMarkdown className="prose max-w-none">{body}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Music;

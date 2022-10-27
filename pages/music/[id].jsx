import { getAllSongIds, getSongData } from "../../lib/songs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export async function getStaticPaths() {
  const paths = getAllSongIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { frontmatter, markdown } = getSongData(params.id);
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
    <div>
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
        <div>
          {/* Title, Artist, Release Date */}
          <div className="flex flex-col gap-y-1 text-center py-4 px-2">
            <h2 className="text-xl">{song.title}</h2>
            <h4 className="text-lg">{song.artist}</h4>
            <h6 className="text-xs">{song.date}</h6>
          </div>
          {/* Stream Links */}
          <div className="flex justify-around md:justify-evenly text-4xl md:text-3xl md:mt-4 p-2">
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

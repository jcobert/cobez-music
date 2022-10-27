import { getAllSongIds, getSongData } from "../../lib/songs";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = getAllSongIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const songData = getSongData(params.id);
  return {
    props: {
      songData,
    },
  };
}

function Music({ songData }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-x-4 justify-center items-center">
        {/* Album artwork */}
        <div className="w-8/12 sm:w-6/12 md:w-4/12 max-w-xs p-4">
          <Image
            src={songData.artwork}
            width={500}
            height={500}
            layout="responsive"
            alt="Album artwork"
          />
        </div>
        {/* Info and Links */}
        <div>
          {/* Title, Artist, Release Date */}
          <div className="text-center py-4 px-2">
            <h2 className="text-xl">{songData.title}</h2>
            <h4 className="text-lg">{songData.artist}</h4>
            <h6 className="text-xs">{songData.date}</h6>
          </div>
          {/* Stream Links */}
          <div className="flex justify-around md:justify-evenly md:mt-4 p-2">
            <a href={songData.spotify}>S</a>
            <a href={songData.apple}>A</a>
            <a href={songData.youtube}>Y</a>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="md:w-10/12 xl:w-8/12 max-w-5xl p-4 mx-auto md:mt-4 lg:mt-12">
        <div>{songData.description}</div>
      </div>
    </div>
  );
}

export default Music;

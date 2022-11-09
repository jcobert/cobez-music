import Head from "next/head";
import SongCard from "../components/SongCard";
import Heading from "../components/Heading";
import { getAllSongData } from "../lib/songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faGrip } from "@fortawesome/free-solid-svg-icons";

export default function Music({ songData }) {
  const featuredSongs = [songData].flatMap((songs) => {
    const songJson = JSON.parse(songs);
    return songJson;
  });

  return (
    <div className="bg-theme-primary">
      <Head>
        <title>Music | Cobez Music</title>
        <meta name="description" content="Official website of Cobez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Heading */}
      <section>
        <Heading className="w-11/12 max-w-3xl mx-auto" text="Music" />
      </section>
      {/* Main Content */}
      <section className="mt-8 md:mt-12 lg:mt-12 mx-auto bg-white py-4 pb-12 md:py-16">
        <div className="mx-auto max-w-3xl border-theme-secondary rounded-md px-4 md:p-0">
          {/* Sort and Filter */}
          <div className="flex justify-end pb-4">
            <div className="flex justify-center items-center text-2xl gap-x-4">
              <button>
                <FontAwesomeIcon icon={faList} />
              </button>
              <button>
                <FontAwesomeIcon icon={faGrip} />
              </button>
            </div>
          </div>
          {/* Songs */}
          <div className="flex flex-col gap-y-8">
            {featuredSongs.map((item, i) => (
              <SongCard key={i} song={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const songData = getAllSongData();
  return {
    props: {
      songData,
    },
  };
}

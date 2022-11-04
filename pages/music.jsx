import Head from "next/head";
import SongCard from "../components/SongCard";
import { getAllSongData } from "../lib/songs";

export default function Music({ songData }) {
  const featuredSongs = [songData].flatMap((songs) => {
    const songJson = JSON.parse(songs);
    return songJson;
  });

  return (
    <div>
      <Head>
        <title>Cobez Music</title>
        <meta name="description" content="Official website of Cobez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Songs */}
      <div className="my-20 md:mt-28 lg:mt-32 w-11/12 mx-auto">
        <div className="mx-auto max-w-3xl bg-theme-tertiary/90 border border-theme-secondary rounded p-4 md:p-8">
          <div className="flex flex-col gap-y-8">
            {featuredSongs.map((item) => (
              <SongCard song={item} />
            ))}
          </div>
        </div>
      </div>
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

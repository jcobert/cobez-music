import Head from "next/head";
import SongCard from "../components/SongCard";
import Heading from "../components/Heading";
import { getAllSongData } from "../lib/songs";

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
      {/* Songs */}
      <section className="mt-8 md:mt-12 lg:mt-12 mx-auto bg-white py-4 pb-12 md:py-16">
        <div className="mx-auto max-w-3xl border-theme-secondary rounded-md px-4 md:p-0">
          <div className="flex flex-col gap-y-8">
            {featuredSongs.map((item) => (
              <SongCard song={item} />
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

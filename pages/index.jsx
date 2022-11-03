import Head from "next/head";
import Script from "next/script";
import SongCard from "../components/SongCard";
import { getAllSongData } from "../lib/songs";

export default function Home({ songData }) {
  const featuredSongs = [songData].flatMap((songs) => {
    const songJson = JSON.parse(songs);
    return songJson.filter(function (song) {
      return song.data.featured;
    });
  });

  return (
    <div>
      <Head>
        <title>Cobez Music</title>
        <meta name="description" content="Official website of Cobez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      {/* Main */}
      <div>
        {/* Heading/Hero */}
        <div className="">
          <img
            className="mx-auto w-full max-w-xl"
            src="/images/cobez-logo.svg"
            alt="Cobez logo"
          />
          <h4 className="font-bellotaHeading font-bold text-3xl text-center text-white mt-2">
            songwriter | producer
          </h4>
        </div>
        {/* Featured Music */}
        <div className="my-20 mx-auto max-w-3xl flex flex-col gap-y-8">
          {featuredSongs.map((item) => (
            <SongCard song={item} />
          ))}
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

import { useState } from "react";
import Head from "next/head";
import SongCard from "../components/SongCard";
import Heading from "../components/Heading";
import { getAllSongData } from "../lib/songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faGrip } from "@fortawesome/free-solid-svg-icons";

export default function Music({ songData }) {
  const [viewType, setViewType] = useState("list");
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
        <div className={`mx-auto border-theme-secondary rounded-md px-4 md:p-0 ${viewType === "grid" ? "max-w-3xl lg:max-w-5xl" : "max-w-3xl"}`}>
          {/* Sort and Filter */}
          <div className="flex justify-end pb-4">
            <div className="flex justify-center items-center text-2xl text-theme-tertiary gap-x-4">
              <button className={`${viewType === "list" ? "outline text-theme-primary" : ""} p-1 rounded flex outline-gray-300`} onClick={() => setViewType("list")}>
                <FontAwesomeIcon icon={faList} />
              </button>
              <button className={`${viewType === "grid" ? "outline text-theme-primary" : ""} p-1 rounded flex outline-gray-300`} onClick={() => setViewType("grid")}>
                <FontAwesomeIcon icon={faGrip} />
              </button>
            </div>
          </div>
          {/* Songs */}
          <div
            className={`${viewType === "grid" ? "grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-y-8"}`}
          >
            {featuredSongs.map((item, i) => (
              <SongCard key={i} song={item} view={viewType} />
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

import { useState } from "react";
import Head from "next/head";
import SongCard from "../components/SongCard";
import Heading from "../components/Heading";
import { getAllSongData } from "../lib/songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faGrip,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import FilterDropdown from "../components/FilterDropdown";

export default function Music({ songData }) {
  const songs = [songData].flatMap((song) => {
    const songJson = JSON.parse(song);
    return songJson;
  });

  // States
  const [viewType, setViewType] = useState("list");
  const [filtered, setFiltered] = useState(false);
  const [reset, setReset] = useState(true);
  const [selection, setSelection] = useState(songs);
  const [filterSetArtist, setFilterSetArtist] = useState(songs);
  const [filterSetGenre, setFilterSetGenre] = useState(songs);

  // Filter Arrays
  let artists = [];
  songs.map((song) => artists.push(song.data.artist));
  artists.sort();
  artists.unshift("All");

  let genres = [];
  songs.map((song) => {
    if (song.data.genre) {
      genres.push(song.data.genre);
    }
  });
  genres.sort();
  genres.unshift("All");

  function handleResetClick() {
    setFilterSetArtist(songs);
    setFilterSetGenre(songs);
    setFiltered(false);
    setSelection(songs);
    setReset(true);
  }

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
      <section className="mt-8 md:mt-12 lg:mt-12 mx-auto bg-white py-4 pb-12 md:py-16 md:px-4">
        <div
          className={`mx-auto border-theme-secondary rounded-md px-4 md:p-0 ${
            viewType === "grid"
              ? "max-w-3xl lg:max-w-5xl"
              : "max-w-3xl lg:max-w-5xl"
          }`}
        >
          {/* Sort and Filter */}
          <div className="flex flex-col gap-y-4 mb-4">
            {/* Filter Dropdowns */}
            <div className="p-4 pt-3 border rounded-md flex flex-col md:flex-row items-center justify-evenly gap-x-2 gap-y-2">
              {/* Artist */}
              <div className="w-full flex-1">
                <FilterDropdown
                  options={artists}
                  filteredState={filtered}
                  setFilteredState={setFiltered}
                  selectionState={selection}
                  setSelectionState={setSelection}
                  filterSetArtist={filterSetArtist}
                  setFilterSetArtist={setFilterSetArtist}
                  filterSetGenre={filterSetGenre}
                  songSelection={songs}
                  filter="artist"
                  title="Artist"
                  reset={reset}
                  resetState={setReset}
                />
              </div>
              {/* Genre */}
              <div className="w-full flex-1">
                <FilterDropdown
                  options={genres}
                  filteredState={filtered}
                  setFilteredState={setFiltered}
                  selectionState={selection}
                  setSelectionState={setSelection}
                  filterSetGenre={filterSetGenre}
                  setFilterSetGenre={setFilterSetGenre}
                  filterSetArtist={filterSetArtist}
                  songSelection={songs}
                  filter="genre"
                  title="Genre"
                  reset={reset}
                  resetState={setReset}
                />
              </div>
              {/* Reset Button */}
              <div className="w-full md:w-24 mx-auto self-end text-base md:text-sm">
                <button
                  className={`w-full border shadow-sm rounded-md p-2 transition ${
                    filtered
                      ? "bg-theme-primary text-white border-gray-300 hover:bg-white hover:text-theme-primary active:bg-theme-primary active:text-white"
                      : "bg-gray-200 text-gray-500 border-gray-300 hover:bg-gray-100 active:bg-gray-200"
                  }`}
                  onClick={handleResetClick}
                >
                  <span className="flex gap-x-2 justify-center items-center">
                    <FontAwesomeIcon icon={faArrowsRotate} />
                    <p className="inline-block">Reset</p>
                  </span>
                </button>
              </div>
            </div>
            {/* View Type Selector */}
            <div className="hidden md:flex justify-end">
              <div className="flex justify-center items-center text-2xl text-theme-tertiary gap-x-4">
                <button
                  className={`${
                    viewType === "list" ? "outline text-theme-primary" : ""
                  } p-1 rounded flex outline-gray-300`}
                  onClick={() => setViewType("list")}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
                <button
                  className={`${
                    viewType === "grid" ? "outline text-theme-primary" : ""
                  } p-1 rounded flex outline-gray-300`}
                  onClick={() => setViewType("grid")}
                >
                  <FontAwesomeIcon icon={faGrip} />
                </button>
              </div>
            </div>
          </div>
          {/* Songs */}
          <div
            className={`${
              viewType === "grid"
                ? "grid grid-cols-1 gap-y-8 gap-x-4 md:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col gap-y-8"
            }`}
          >
            {selection.map((song, i) => {
              return <SongCard key={i} song={song} view={viewType} />;
            })}
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

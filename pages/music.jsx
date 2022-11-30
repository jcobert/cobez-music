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

  // Sort songs by date by default
  sortSongs("date", "desc");

  // States
  const [viewType, setViewType] = useState("list");
  const [reset, setReset] = useState(true);
  const [selection, setSelection] = useState(songs);
  const [filterChoiceArtist, setFilterChoiceArtist] = useState("All");
  const [filterChoiceGenre, setFilterChoiceGenre] = useState("All");

  // Define Filter Options
  let artistList = [];
  songs.map((song) => artistList.push(song.data.artist));
  artistList.sort();
  artistList.unshift("All");
  const artists = [...new Set(artistList)];

  let genreList = [];
  songs.map((song) => {
    if (song.data.genre) {
      genreList.push(song.data.genre);
    }
  });
  genreList.sort();
  genreList.unshift("All");
  const genres = [...new Set(genreList)];

  function handleResetClick() {
    setFilterChoiceArtist("All");
    setFilterChoiceGenre("All");
    setSelection(songs);
    setReset(true);
  }

  function sortSongs(property, direction = "asc") {
    songs.sort((a, b) => {
      let valA = a.data[property];
      let valB = b.data[property];
      if (property === "date") {
        valA = new Date(a.data.date);
        valB = new Date(b.data.date);
      }
      if (valA < valB) {
        if (direction === "asc") {
          return -1;
        }
        return 1;
      }
      if (valA > valB) {
        if (direction === "asc") {
          return 1;
        }
        return -1;
      }
      return 0;
    });
  }

  function handleSortClick() {}

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
      {/* Body */}
      <section className="wrapper-body bg-white">
        <div className="container-body">
          {/* Sort and Filter */}
          <div className="flex flex-col gap-y-4 mb-4">
            {/* Filter Dropdowns */}
            <div className="p-4 pt-3 border rounded-md flex flex-col md:flex-row items-center justify-evenly gap-x-2 gap-y-2">
              {/* Artist */}
              <div className="w-full flex-1">
                <FilterDropdown
                  options={artists}
                  choiceArtist={filterChoiceArtist}
                  choiceGenre={filterChoiceGenre}
                  setChoiceArtist={setFilterChoiceArtist}
                  setChoiceGenre={setFilterChoiceGenre}
                  selectionState={selection}
                  setSelectionState={setSelection}
                  allSongs={songs}
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
                  choiceArtist={filterChoiceArtist}
                  choiceGenre={filterChoiceGenre}
                  setChoiceArtist={setFilterChoiceArtist}
                  setChoiceGenre={setFilterChoiceGenre}
                  selectionState={selection}
                  setSelectionState={setSelection}
                  allSongs={songs}
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
                    !reset
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
            {/* Sort Options */}
            <div className="p-4 pt-3 border rounded-md flex md:flex-row items-center justify-evenly gap-x-2 gap-y-2">
              <button
                name="btnSortDate"
                onClick={handleSortClick}
                className="border p-2 rounded"
              >
                Date
              </button>
              <button
                name="btnSortTitle"
                onClick={handleSortClick}
                className="border p-2 rounded"
              >
                Title
              </button>
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
          {/* No Results Message */}
          <div
            className={
              selection.length === 0 ? "flex flex-col gap-y-2 mt-16" : "hidden"
            }
          >
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-3xl">😕</span>
              <p className="text-center">No songs found...</p>
            </div>
            <div className="flex justify-center">
              <button
                className="text-center text-theme-primary hover:text-theme-tertiary font-bold cursor-pointer transition"
                onClick={handleResetClick}
              >
                Clear filters
              </button>
            </div>
          </div>
          {/* Found Songs */}
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

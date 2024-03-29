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
  faArrowUpAZ,
  faArrowDownZA,
  faArrowUp19,
  faArrowDown91,
} from "@fortawesome/free-solid-svg-icons";
import FilterDropdown from "../components/FilterDropdown";

export default function Music({ songData }) {
  const songs = [songData].flatMap((song) => {
    const songJson = JSON.parse(song);
    return songJson;
  });

  // States
  const [viewType, setViewType] = useState("list");
  const [reset, setReset] = useState(true);
  const [selection, setSelection] = useState(songs);
  const [filterChoiceArtist, setFilterChoiceArtist] = useState("All");
  const [filterChoiceGenre, setFilterChoiceGenre] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [sortAscending, setSortAscending] = useState(false);

  // Sort songs using initial sort states (by date, descending)
  sortSongs(sortBy, sortAscending);

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

  // Song sorting function
  function sortSongs(property, ascending = true) {
    let output = selection.sort((a, b) => {
      let valA = a.data[property];
      let valB = b.data[property];
      if (property === "date") {
        valA = new Date(a.data.date);
        valB = new Date(b.data.date);
      }
      if (valA < valB) {
        if (ascending) {
          return -1;
        }
        return 1;
      }
      if (valA > valB) {
        if (ascending) {
          return 1;
        }
        return -1;
      }
      return 0;
    });
    return output;
  }

  // Filter reset button handler
  function handleResetClick() {
    setFilterChoiceArtist("All");
    setFilterChoiceGenre("All");
    setSelection(songs);
    setSortBy("date");
    setSortAscending(false);
    setReset(true);
  }

  // Sort button handler
  function handleSortClick(e) {
    const source = e.target;
    let sortType = "";
    if (!source.getAttribute("data-sortType")) {
      // if button's children are clicked
      sortType = source.closest("button").getAttribute("data-sortType");
    } else {
      sortType = source.getAttribute("data-sortType");
    }
    setSortBy(sortType);
    setSortAscending(() => {
      if (sortBy !== sortType) {
        if (sortType === "date") {
          return false;
        }
        return true;
      }
      return !sortAscending;
    });
    setSelection(sortSongs(sortBy, sortAscending));
  }

  // Sort Button Icon
  const SortIcon = (props) => {
    let icon = null;
    let icons = [];
    let visibility = "";
    const style = props.className;

    if (props?.type === "numeric") {
      icons = [faArrowUp19, faArrowDown91];
    } else {
      icons = [faArrowUpAZ, faArrowDownZA];
    }

    if (sortAscending) {
      icon = icons[0];
    } else {
      icon = icons[1];
    }

    if (props.sortBy !== sortBy) {
      visibility = "hidden";
    }

    return (
      <div className={`${visibility} ${style}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
    );
  };

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
          <div className="flex flex-col gap-y-4 border rounded-md">
            {/* Filter Dropdowns */}
            <div className="p-4 pt-3 flex flex-col md:flex-row items-center justify-evenly gap-x-2 gap-y-2">
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
            <div className="p-4 pt-3 rounded-md flex md:flex-row items-center justify-evenly gap-x-2 gap-y-2 lg:justify-end">
              <button
                data-sortType="date"
                onClick={handleSortClick}
                className={`border p-2 rounded flex-1 flex justify-center gap-x-2 lg:flex-none lg:w-32 ${
                  sortBy === "date" ? "text-theme-primary border-theme-primary" : ""
                }`}
              >
                <span>Date</span>
                <SortIcon sortBy="date" type="numeric" className={``} />
              </button>
              <button
                data-sortType="title"
                onClick={handleSortClick}
                className={`border p-2 rounded flex-1 flex justify-center gap-x-2 lg:flex-none lg:w-32 ${
                  sortBy === "title" ? "text-theme-primary border-theme-primary" : ""
                }`}
              >
                <span>Title</span>
                <SortIcon sortBy="title" className={``} />
              </button>
            </div>
          </div>
          {/* View Type Selector */}
          <div className="hidden md:flex justify-end py-4">
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

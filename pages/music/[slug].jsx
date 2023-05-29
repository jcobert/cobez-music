import { getAllSongIds, getSongData } from "../../lib/songs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

export async function getStaticPaths() {
  const paths = getAllSongIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { frontmatter, markdown } = getSongData(params.slug);
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
    <div className="bg-white/95 pt-4 md:pt-12 pb-12 md:pb-8 min-h-screen">
      {/* Page Nav Link */}
      <div className="w-constrain py-4">
        <Link href="/music">
          <a className="w-fit group text-theme-tertiary flex items-center gap-x-2 px-4 sm:px-0">
            <FontAwesomeIcon
              className="text-theme-tertiary group-hover:text-theme-primary transition"
              icon={faAngleLeft}
            />
            <span className="font-bold group-hover:text-theme-primary transition">
              All music
            </span>
          </a>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-x-4 justify-center items-center">
        {/* Album artwork */}
        <div className="w-8/12 sm:w-6/12 md:w-4/12 max-w-xs p-4">
          <Image
            src={song.artwork}
            width={500}
            height={500}
            layout="responsive"
            alt="Album artwork"
            style={{ borderRadius: 5 }}
          />
        </div>
        {/* Info and Links */}
        <div className="w-full md:w-fit">
          {/* Title, Artist, Release Date */}
          <div className="flex flex-col gap-y-1 text-center pt-4 px-2">
            <h2 className="text-xl font-bold">{song.title}</h2>
            <h4 className="text-lg">{song.artist}</h4>
            <h6 className="text-sm text-theme-tertiary">{song.date}</h6>
          </div>
          {/* Stream Links */}
          <div className="flex justify-around md:justify-center md:gap-x-16 text-4xl md:text-3xl text-theme-primary mt-4 p-2">
            <a href={song.links.spotify}>
              <FontAwesomeIcon
                className="hover:text-theme-tertiary transition"
                icon={faSpotify}
              />
            </a>
            <a href={song.links.apple}>
              <FontAwesomeIcon
                className="hover:text-theme-tertiary transition"
                icon={faApple}
              />
            </a>
            <a href={song.links.youtube}>
              <FontAwesomeIcon
                className="hover:text-theme-tertiary transition"
                icon={faYoutube}
              />
            </a>
          </div>
          {/* Credits */}
          <div className="py-4">
            <span className="block mx-auto w-10/12 border-b"></span>
            <div className="flex justify-center gap-x-1 py-4 px-6 flex-wrap">
              <span className="font-bold text-gray-700">Credits:</span>
              {song.credits?.map((credit, i) => {
                let delimiter = ",";
                if (i === song.credits.length - 1) {
                  delimiter = "";
                }
                return (
                  <span key={i}>{`${credit.toLowerCase()}${delimiter}`}</span>
                );
              })}
            </div>
            <span className="block mx-auto w-10/12 border-b"></span>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className={!body ? "hidden" : ""}>
        <div className="md:w-10/12 xl:w-8/12 max-w-5xl p-4 mx-auto md:mt-4 lg:mt-12">
          <ReactMarkdown className="prose max-w-none">{body}</ReactMarkdown>
        </div>
      </div>
      {/* Lyrics */}
      <Disclosure>
        {({ open }) => (
          <div className={!song.lyrics ? "hidden" : ""}>
            <div className="md:w-10/12 xl:w-8/12 max-w-5xl p-4 mx-auto text-center mt-10 md:mt-16">
              <Disclosure.Button
                className={`mx-auto rounded-t-md p-4 md:p-3 max-w-2xl bg-theme-primary hover:bg-theme-tertiary text-white hover:text-white border text-lg md:text-base flex gap-x-2 justify-center items-center transition-all ${
                  open ? "w-full" : "rounded-md w-full md:w-72"
                }`}
              >
                <div className="flex items-center justify-center w-full text-lg gap-x-2 px-2">
                  <span className="">Lyrics</span>
                  <span className={`${!open ? "" : ""}`}>
                    <FontAwesomeIcon
                      className={
                        !open
                          ? "rotate-180 transform transition-transform"
                          : "transform transition-transform"
                      }
                      icon={open ? faAngleDown : faAngleDown}
                    ></FontAwesomeIcon>
                  </span>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel
                className={`bg-white rounded-b-md border border-t-0 p-8 max-w-2xl mx-auto`}
              >
                <ReactMarkdown className="prose leading-3 max-w-none">
                  {song.lyrics?.replace(/\n/gi, "&nbsp; \n \n")}
                </ReactMarkdown>
              </Disclosure.Panel>
            </div>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default Music;

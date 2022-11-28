import Head from "next/head";
import Script from "next/script";
import SongCard from "../components/SongCard";
import { getAllSongData } from "../lib/songs";
import Image from "next/future/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/ContactForm";
import { getAboutData } from "../lib/about";
import ReactMarkdown from "react-markdown";

export default function Home({ songData, background }) {
  const featuredSongs = [songData].flatMap((songs) => {
    const songJson = JSON.parse(songs);
    return songJson.filter(function (song) {
      return song.data.featured;
    });
  });

  return (
    <div className="mt-8">
      <Head>
        <title>Cobez Music</title>
        <meta name="description" content="Official website of Cobez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      {/* Main */}
      <div>
        {/* Heading/Hero */}
        <div className="px-10">
          <Image
            className="mx-auto w-full max-w-xl"
            src="/images/cobez-logo.svg"
            width={200}
            height={100}
            alt="Cobez logo"
          />
          <h4 className="font-bellotaHeading font-bold text-3xl text-center text-white mt-2">
            songwriter | producer
          </h4>
        </div>
        {/* Featured Music Section */}
        <section className="bg-gray-100">
          <div className="mt-20 md:mt-24 lg:mt-24 w-11/12 mx-auto pt-8 pb-12 md:pt-16 md:pb-20">
            {/* Header */}
            <div className="h-16 mx-auto max-w-3xl flex items-center justify-center md:justify-start md:pl-4 border-l-4 border-theme-primary border-b-4 rounded-bl-md mb-4 md:mb-12">
              <h1 className="text-theme-primary text-3xl md:text-3xl text-center md:text-left font-bellotaHeading font-bold">
                Featured Music
              </h1>
            </div>
            <div className="w-fit mx-auto rounded-md shadow">
              {/* Body */}
              <div className="mx-auto max-w-3xl lg:max-w-5xl bg-white border rounded p-4 md:p-8">
                <div className="flex flex-col gap-y-8">
                  {featuredSongs.map((item, i) => (
                    <SongCard
                      key={i}
                      song={item}
                      view="list"
                      layout="compact"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Music Page Link */}
            <div className="text-center mt-8 md:mt-12 py-2 md:pb-0">
              <Link href="/music">
                <a className="inline-block rounded-md p-4 md:p-2 w-9/12 sm:max-w-[12rem] border bg-theme-primary hover:bg-theme-tertiary text-white hover:text-white text-lg md:text-base font-bold transition">
                  <div className="flex gap-x-2 justify-center items-center">
                    <span>All Music</span>
                    <FontAwesomeIcon
                      className="animate-pulse"
                      icon={faArrowRight}
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* Section Break */}
        <section className="">
          <div className="mt-20 md:mt-24 lg:mt-24 w-11/12 mx-auto py-8 invisible">
            <div className="py-8"></div>
          </div>
        </section>
        {/* About Section */}
        <section className="bg-theme-primary">
          <div className="mt-20 md:mt-24 lg:mt-24 w-11/12 mx-auto pt-8 pb-12 md:pt-16 md:pb-20">
            {/* Header */}
            <div className="h-16 mx-auto max-w-3xl flex items-center justify-center md:justify-start md:pl-4 border-l-4 border-white border-b-4 rounded-bl-md mb-4 md:mb-12">
              <h1 className="text-white text-3xl md:text-3xl text-center md:text-left font-bellotaHeading font-bold">
                About
              </h1>
            </div>
            <div className="w-full max-w-3xl mx-auto rounded-md shadow">
              {/* Body */}
              <div className="mx-auto bg-white border rounded p-4 md:p-8">
                <div className="flex flex-col gap-y-8">
                  <div className="rounded-md px-4 md:px-0 flex-1">
                    <ReactMarkdown className="prose max-w-none">
                      {background?.markdown}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
            {/* About Page Link */}
            <div className="text-center mt-8 md:mt-12 py-2 md:pb-0">
              <Link href="/about">
                <a className="inline-block rounded-md p-4 md:p-2 w-9/12 sm:max-w-[12rem] border border-theme-primary bg-white hover:bg-theme-primary text-theme-primary hover:text-white text-lg md:text-base font-bold transition">
                  <div className="flex gap-x-2 justify-center items-center">
                    <span>Learn More...</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* Section Break */}
        <section className="">
          <div className="mt-20 md:mt-24 lg:mt-24 w-11/12 mx-auto py-8 invisible">
            <div className="py-8"></div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="bg-theme-tertiary">
          <div className="mt-20 md:mt-24 lg:mt-24 w-11/12 mx-auto pt-8 pb-12 md:pt-16 md:pb-20">
            {/* Header */}
            <div className="h-16 mx-auto max-w-3xl flex items-center justify-center md:justify-start md:pl-4 border-l-4 border-white border-b-4 rounded-bl-md mb-4 md:mb-12">
              <h1 className="text-white text-3xl md:text-3xl text-center md:text-left font-bellotaHeading font-bold">
                Contact Me
              </h1>
            </div>
            <div className="w-full max-w-3xl lg:max-w-3xl mx-auto rounded-md shadow">
              {/* Body */}
              <div className="mx-auto bg-theme-secondary border rounded">
                <div className="flex flex-col gap-y-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const songData = getAllSongData();
  const background = getAboutData("background");
  const influences = getAboutData("influences");
  return {
    props: {
      songData,
      background,
      influences,
    },
  };
}

import Head from "next/head";
import Script from "next/script";
import SongCard from "../components/SongCard";

const featuredSong = {
  title: "The Eye Test (Theme from The Eye Test Podcast)",
  artist: "Cobez",
  date: "Apr 10, 2022",
  description:
    "The Eye Test is a sports podcast, hosted by my good friend Brian Donovan. I currently produce the show - editing the episodes and prepping them for release. This song is the extended version of the intro theme music that I created for the show.",
  links: {
    spotify:
      "https://open.spotify.com/track/0gLGKcUMjGQQ8aimmgjtL8?si=c6ed19eddf234a51",
    apple:
      "https://music.apple.com/us/album/the-eye-test-theme-from-the-eye-test-podcast/1619215200?i=1619215201",
    youtube: "https://music.youtube.com/watch?v=R9kKrzz7imk",
  },
  artwork: "/images/cms/theme-song-art.jpg",
};

export default function Home() {
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
        <div className="my-20 mx-auto max-w-3xl">
          <SongCard song={featuredSong} />
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import Script from "next/script";
import SongCard from "../components/SongCard";

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
        <div className="">
          <img className="mx-auto w-full max-w-2xl" src="/images/cobez-logo.svg" alt="Cobez logo" />
          <h4 className="font-bellotaHeading font-bold text-3xl text-center text-white">songwriter | producer</h4>
        </div>
        <SongCard />
      </div>
    </div>
  );
}

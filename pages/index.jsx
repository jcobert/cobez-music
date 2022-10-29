import Head from "next/head";
import Script from "next/script";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cobez Music</title>
        <meta name="description" content="Official website of Cobez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <div></div>
    </div>
  );
}

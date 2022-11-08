import Head from "next/head";
import Heading from "../components/Heading";

export default function Contact() {
  return (
    <div className="bg-theme-primary">
      <Head>
        <title>Contact | Cobez Music</title>
        <meta name="description" content="Official website of Cobez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Heading */}
      <section>
        <Heading className="w-11/12 max-w-3xl mx-auto" text="Contact" />
      </section>
      {/* Body */}
      <section className="mt-8 md:mt-12 lg:mt-12 mx-auto bg-white py-4 pb-12 md:py-16 h-screen">
        <div className="mx-auto max-w-3xl border rounded-md px-4 md:p-0"></div>
      </section>
    </div>
  );
}

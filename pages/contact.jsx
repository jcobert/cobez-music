import { useState } from "react";
import Head from "next/head";
import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
      <section className="wrapper-body bg-white">
        <div className="container-body">
          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

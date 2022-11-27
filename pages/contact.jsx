import Head from "next/head";
import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const links = {
    instagram: "https://www.instagram.com/jcobez",
    email: "mailto:josh@cobezmusic.com",
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
          {/* Graphic */}
          <div className="text-center text-7xl md:text-8xl text-theme-primary my-8 md:my-2">
            <FontAwesomeIcon icon={faVolumeHigh} />
          </div>
          {/* CTA */}
          <div className="my-8 md:my-12 max-w-3xl mx-auto text-center">
            <p>Looking to collaborate or have something to share?</p>
            <p>Please leave a message below.</p>
            <p className="mt-4">
              Feel free to reach out on Instagram or send me an email as well.
            </p>
            <div className="text-theme-primary text-4xl md:text-3xl flex justify-center items-center gap-14 md:gap-8 py-6 pt-8">
              <a
                class="hover:text-theme-tertiary transition-all"
                href={links.instagram}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                class="hover:text-theme-tertiary transition-all"
                href={links.email}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

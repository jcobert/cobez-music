import Head from "next/head";
import Heading from "../components/Heading";
import { getAboutData } from "../lib/about";
import ReactMarkdown from "react-markdown";
import Image from "next/future/image";
import artistPhotoPark from "../public/images/artist-photo-cobez-park-2.jpg";
import artistPhotoLift from "../public/images/artist-photo-cobez-lift.jpg";

export async function getStaticProps({ params }) {
  const background = getAboutData("background");
  const influences = getAboutData("influences");
  return {
    props: {
      background,
      influences,
    },
  };
}

export default function About({ background, influences }) {
  return (
    <div className="bg-theme-primary">
      <Head>
        <title>About | Cobez Music</title>
        <meta name="description" content="Official website of Cobez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Heading */}
      <section>
        <Heading className="w-11/12 max-w-3xl mx-auto" text="About" />
      </section>
      {/* Body */}
      <section className="wrapper-body bg-white">
        <div className="container-body">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col md:inline gap-y-4">
              {/* Artist Photo */}
              <div className="w-7/12 max-w-[16rem] mx-auto md:float-left md:mr-4 outline outline-2 outline-theme-secondary rounded-[5px]">
                <Image
                  src={artistPhotoPark}
                  alt="Artist photo"
                  layout="responsive"
                  style={{ borderRadius: 5 }}
                />
              </div>
              {/* CMS Markdown - Background */}
              <div className="rounded-md px-4 md:px-0 flex-1">
                <ReactMarkdown className="prose max-w-none">
                  {background.markdown}
                </ReactMarkdown>
              </div>
            </div>
            <div className="flex flex-col md:inline gap-y-4">
              {/* Artist Photo */}
              <div className="w-7/12 max-w-[16rem] mx-auto md:float-right md:ml-4 outline outline-2 outline-theme-secondary rounded-[5px]">
                <Image
                  src={artistPhotoLift}
                  alt="Artist photo"
                  layout="responsive"
                  style={{ borderRadius: 5 }}
                />
              </div>
              {/* CMS Markdown - Influences */}
              <div className="rounded-md px-4 md:px-0 flex-1">
                <ReactMarkdown className="prose max-w-none">
                  {influences.markdown}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

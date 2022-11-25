import { useState } from "react";
import Head from "next/head";
import Heading from "../components/Heading";

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
            <form onSubmit={handleSubmit} name="contact">
              <div className="border rounded shadow-sm text-lg px-4 py-12 md:px-16 lg:px-48">
                {/* Body */}
                <div className="grid grid-cols-2 gap-6">
                  {/* First */}
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="first-name" className="block">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      required
                      className="border rounded w-full px-2 py-1 shadow-sm"
                    />
                  </div>
                  {/* Last */}
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="last-name" className="block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      required
                      className="border rounded w-full px-2 py-1 shadow-sm"
                    />
                  </div>
                  {/* Email */}
                  <div className="col-span-2">
                    <label htmlFor="email" className="block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="border rounded w-full px-2 py-1 shadow-sm"
                    />
                  </div>
                  {/* Message */}
                  <div className="col-span-2">
                    <label htmlFor="message" className="block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={4}
                      className="border rounded w-full px-2 py-1 shadow-sm"
                    ></textarea>
                  </div>
                  {/* Submit */}
                  <div className="col-span-2 w-full mt-8 md:mt-12">
                    <button
                      type="submit"
                      className="block rounded-md mx-auto p-4 w-9/12 sm:max-w-[12rem] border bg-theme-primary hover:bg-theme-tertiary text-white hover:text-white font-bold transition"
                    >
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

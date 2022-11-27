import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function ContactForm(props) {
  const [submitted, setSubmitted] = useState(false);
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...inputValues }),
    };
    fetch("/", options)
      .then(function (res) {})
      .catch(function (error) {});

    setSubmitted(true);
    setInputValues({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name="contact" data-netlify="true">        
        <div className="border rounded shadow-sm text-lg px-4 pt-8 pb-12 md:px-16 lg:px-48">
          {/* Body */}
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 mb-4 md:mb-8">
              <h3 className="text-center text-3xl md:text-4xl font-bold text-theme-primary">
                Send me a message!
              </h3>
            </div>
            {/* First */}
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="first-name" className="block">
                First Name
              </label>
              <input
                onChange={handleInputChange}
                ref={firstNameRef}
                type="text"
                name="firstName"
                id="first-name"
                value={inputValues.firstName}
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
                onChange={handleInputChange}
                ref={lastNameRef}
                type="text"
                name="lastName"
                id="last-name"
                value={inputValues.lastName}
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
                onChange={handleInputChange}
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                value={inputValues.email}
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
                onChange={handleInputChange}
                ref={messageRef}
                name="message"
                id="message"
                value={inputValues.message}
                required
                rows={4}
                className="border rounded w-full px-2 py-1 shadow-sm"
              ></textarea>
            </div>
            {/* Submit */}
            <div className="col-span-2 w-full mt-8 md:mt-12">
              <button
                type="submit"
                className={`block rounded-md mx-auto p-4 md:p-3 w-9/12 sm:max-w-[12rem] border bg-theme-primary hover:bg-theme-tertiary text-white hover:text-white font-bold transition ${
                  submitted ? "hidden" : ""
                }`}
              >
                <span>Submit</span>
              </button>
              {/* Success Response */}
              <div
                className={`flex justify-center items-center gap-x-2 text-center mx-auto p-4 md:p-3 w-full text-theme-primary border border-transparent ${
                  !submitted ? "hidden" : ""
                }`}
              >
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>Your message was sent!</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

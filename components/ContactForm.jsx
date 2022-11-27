export default function ContactForm(props) {
  return (
    <form name="contact" method="post" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
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
              className="block rounded-md mx-auto p-4 md:p-3 w-9/12 sm:max-w-[12rem] border bg-theme-primary hover:bg-theme-tertiary text-white hover:text-white font-bold transition"
            >
              <span>Submit</span>
            </button>
            {/* Success Response */}
            {/* <p className="text-center mx-auto p-4 md:p-3 w-full border border-transparent">
              Your message was sent!
            </p> */}
          </div>
        </div>
      </div>
    </form>
  );
}

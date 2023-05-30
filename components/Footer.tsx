import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  // faTwitter,
  faSpotify,
  faApple,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  const links = {
    twitter: "https://twitter.com/cobezmusic",
    instagram: "https://www.instagram.com/jcobez",
    spotify: "https://open.spotify.com/artist/5jLKe96xKalXo8OU31kN4b",
    apple: "https://music.apple.com/us/artist/cobez/1447780638",
    email: "mailto:josh@cobezmusic.com",
  };

  return (
    <div className="w-full bg-slate-700">
      <div className="max-w-layoutMax md:w-11/12 mx-auto text-white py-8 md:py-2 flex flex-col md:flex-row gap-y-8 md:justify-between items-center">
        {/* Links */}
        <div class="text-3xl md:text-xl flex gap-x-16 md:gap-x-10">
          <a
            class="hover:text-theme-secondary transition-all"
            href={links.spotify}
          >
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a
            class="hover:text-theme-secondary transition-all"
            href={links.apple}
          >
            <FontAwesomeIcon icon={faApple} />
          </a>
          <a
            class="hover:text-theme-secondary transition-all"
            href={links.instagram}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* <a
            class="hover:text-theme-secondary transition-all"
            href={links.twitter}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a> */}
          <a
            class="hover:text-theme-secondary transition-all"
            href={links.email}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className="flex-grow md:ml-8">
          <p className="font-cookie text-slate-400 text-4xl md:text-2xl">
            Cobez
          </p>
        </div>
        {/* Credit */}
        <div className="flex flex-col md:flex-row gap-y-8 gap-x-8 items-center">
          <div class="text-xs">
            <p id="copyright" className="hover:text-theme-secondary transition">
              <a href="https://joshcobert.com">
                &#128736;{" " + currentYear} Josh Cobert
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import {
  faSpotify,
  faApple,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

/** Determines icon to display for provided link type */
export const determineLinkIcon = (link: string) => {
  let icon: IconDefinition;
  switch (link) {
    case "spotify":
      icon = faSpotify;
      break;
    case "apple":
      icon = faApple;
      break;
    case "youtube":
      icon = faYoutube;
      break;
    default:
      icon = faLink;
      break;
  }
  return icon;
};

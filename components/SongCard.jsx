import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { determineLinkIcon } from "../lib/utils";

function SongCard(props) {
  const song = props?.song;

  const hasLinks = !!song?.data?.links;
  const streamLinks = hasLinks ? Object.keys(song?.data?.links) : [];

  const listComponent = (
    <div className="shadow rounded-md">
      {/* Content */}
      <div className="border bg-slate-50 pb-4 md:pb-0 rounded-md">
        <div className="flex flex-col md:flex-row justify-center items-center px-4 lg:pl-0">
          {/* Artwork */}
          <Link href={`/music/${song?.slug}`}>
            <a className="h-56 w-56 md:h-32 md:w-32 lg:h-40 lg:w-40 flex items-center justify-center">
              {!!song?.data?.artwork ? (
                <div
                  className="bg-contain bg-no-repeat bg-center p-24 md:p-16 lg:p-[4.25rem]"
                  style={{
                    backgroundImage: `url(${song?.data?.artwork})`,
                    borderRadius: 5,
                  }}
                ></div>
              ) : (
                <div className="h-56 w-56 md:h-32 md:w-32 lg:h-40 lg:w-40 p-4 md:p-0 lg:p-3">
                  <div className="flex flex-col h-full justify-center items-center gap-y-2 md:gap-y-1 rounded border bg-white/50 text-theme-primary">
                    <div className="w-fit">
                      <FontAwesomeIcon
                        className="text-6xl md:text-5xl"
                        icon={faMusic}
                      />
                    </div>
                    <p className="font-cookie text-3xl md:text-2xl text-theme-secondary">
                      Cobez
                    </p>
                  </div>
                </div>
              )}
            </a>
          </Link>
          {/* Body */}
          <div className="flex flex-col w-full items-center gap-y-4 md:gap-y-2 md:pl-5 mt-3 md:mt-0 md:py-4 md:flex-1 lg:pr-2">
            {/* Title */}
            <div className="flex flex-col items-center md:items-start md:self-start text-center md:text-left lg:w-full lg:pr-6">
              <h4 className="text-lg font-bold">{song?.data?.title}</h4>
              <h5 className="text-slate-800 font-bold">{song?.data?.artist}</h5>
              <h6 className="text-sm text-theme-tertiary">
                {song?.data?.date}
              </h6>
            </div>
            {/* Description */}
            <div className="md:self-start lg:w-full lg:pr-6 text-theme-tertiary">
              <p>{song?.data?.description}</p>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-y-4 lg:hidden">
              {/* Stream Links */}
              <div className="flex w-full md:w-9/12 items-center justify-around md:justify-center md:gap-x-8 text-5xl md:text-3xl text-theme-primary p-2 md:p-1 flex-1">
                {streamLinks?.map((link) => (
                  <a href={song?.data?.links?.[link]}>
                    <FontAwesomeIcon
                      className="hover:text-theme-tertiary transition"
                      icon={determineLinkIcon(link)}
                    />
                  </a>
                ))}
              </div>
              {/* Learn More Button */}
              <div className="w-full text-center flex-1 mb-4 md:mb-0 lg:hidden">
                <Link href={`/music/${song?.slug}`}>
                  <a className="mx-auto rounded-md p-4 md:p-2 md:w-36 w-10/12 sm:max-w-[12rem] bg-white hover:bg-theme-primary text-theme-primary hover:text-white border text-lg md:text-base flex gap-x-2 justify-center items-center transition-all">
                    <span>Learn More</span>
                    <FontAwesomeIcon className="" icon={faAngleRight} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* --- Large Breakpoint Only --- */}
          <div className="hidden lg:flex gap-x-4">
            {/* Stream Links - lg */}
            <div className="flex w-full md:w-9/12 items-center justify-around md:justify-center md:gap-x-8 text-5xl md:text-3xl text-theme-primary p-2 md:p-1 flex-1">
              {streamLinks?.map((link) => (
                <a href={song?.data?.links?.[link]}>
                  <FontAwesomeIcon
                    className="hover:text-theme-tertiary transition"
                    icon={determineLinkIcon(link)}
                  />
                </a>
              ))}
            </div>
            {/* Learn More Button - lg */}
            <div className="text-center hidden lg:block px-2">
              <Link href={`/music/${song?.slug}`}>
                <a className="mx-auto rounded-md py-2 px-3 w-full max-w-[12rem] bg-white hover:bg-theme-primary text-theme-primary hover:text-white border text-base flex gap-x-2 justify-center items-center transition-all">
                  <span>Learn More</span>
                  <FontAwesomeIcon className="" icon={faAngleRight} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const gridComponent = (
    <div className="shadow rounded-md flex flex-col">
      {/* Content */}
      <div className="border bg-slate-50 pb-4 md:pb-0 rounded-md flex-1 flex flex-col justify-center items-center px-4">
        {/* Artwork */}
        <Link href={`/music/${song?.slug}`}>
          <a className="h-56 w-56 flex items-center justify-center">
            {song?.data?.artwork ? (
              <div
                className="bg-contain bg-no-repeat bg-center p-24"
                style={{
                  backgroundImage: `url(${song?.data?.artwork})`,
                  borderRadius: 5,
                }}
              ></div>
            ) : (
              <div className="h-56 w-56 p-4">
                <div className="flex flex-col h-full justify-center items-center gap-y-2 rounded border bg-white/50 text-theme-primary">
                  <div className="w-fit">
                    <FontAwesomeIcon className="text-7xl" icon={faMusic} />
                  </div>
                  <p className="font-cookie text-4xl text-theme-secondary">
                    Cobez
                  </p>
                </div>
              </div>
            )}
          </a>
        </Link>
        {/* Body */}
        <div className="flex flex-col items-center gap-y-4 w-full mt-3 flex-1">
          {/* Title */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-bold">{song?.data?.title}</h4>
            <h5 className="text-slate-800 font-bold">{song?.data?.artist}</h5>
            <h6 className="text-sm text-theme-tertiary">{song?.data?.date}</h6>
          </div>
          {/* Description */}
          <div className="md:text-center">
            <p>{song?.data?.description}</p>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-y-4 flex-1">
            {/* Stream Links */}
            <div className="flex w-full md:w-9/12 items-center justify-around text-5xl md:text-4xl text-theme-primary p-2 flex-1">
              {streamLinks?.map((link) => (
                <a href={song?.data?.links?.[link]}>
                  <FontAwesomeIcon
                    className="hover:text-theme-tertiary transition"
                    icon={determineLinkIcon(link)}
                  />
                </a>
              ))}
            </div>
            {/* Learn More Button */}
            <div className="w-full text-center mb-4">
              <Link href={`/music/${song?.slug}`}>
                <a className="mx-auto rounded-md p-4 md:p-2 md:w-6/12 w-10/12 sm:max-w-[12rem] bg-white hover:bg-theme-primary text-theme-primary hover:text-white border text-lg md:text-base flex gap-x-2 justify-center items-center transition-all">
                  <span>Learn More</span>
                  <FontAwesomeIcon className="" icon={faAngleRight} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return props?.view === "grid" ? gridComponent : listComponent;
}

export default SongCard;

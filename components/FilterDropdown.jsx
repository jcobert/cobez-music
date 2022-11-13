import { useState, useEffect, useCallback, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline/";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FilterDropdown(props) {
  const [selected, setSelected] = useState("All");

  const items = props.options;

  useEffect(() => {
    handleFilter();
  }, [selected]);

  function filterSongsByArtist(artist) {
    return props.songSelection.filter(function (song) {
      return song.data.artist === artist;
    });
  }

  const handleFilter = useCallback(() => {
    if (selected === "All") {
      props.setSelectionState(props.songSelection);
      props.setFilteredState(false);
    } else {
      props.setSelectionState(filterSongsByArtist(selected));
      props.setFilteredState(true);
    }
  });

  const handleChange = useCallback((e) => {
    setSelected(e);
    if (props.reset) {
      props.resetState(false);
    }
  });

  return (
    <div className="w-full">
      <Listbox value={props.reset ? "Any" : selected} onChange={handleChange}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm text-gray-700">
              {props.title}
            </Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="relative w-full text-slate-700 md:text-sm bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1">
                <span className="flex items-center">
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="ml-3 block truncate">
                    {props.reset ? "Any" : selected}
                  </span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition show={open} as={Fragment}>
                <Listbox.Options className="absolute z-10 mt-1 w-full divide-y divide-slate-100 bg-white shadow-lg max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {items.map((item, i) => (
                    <Listbox.Option
                      key={i}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "text-white bg-theme-primary"
                            : "text-slate-700",
                          "cursor-default select-none relative pl-3 pr-9",
                          props.filter !== "artist" ? "py-4 md:py-2" : "py-2"
                        )
                      }
                      value={item}
                      onClick={handleFilter}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? "" : "",
                                "ml-3 block truncate"
                              )}
                            >
                              {item}
                            </span>
                          </div>
                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-theme-primary",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default FilterDropdown;

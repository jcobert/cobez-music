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

  const options = props.options;

  useEffect(() => {
    handleFilter();
  }, [selected]);

  useEffect(() => {
    if (props.reset) {
      setSelected("All");
    }
  }, [props.reset]);

  function filterSongs(filterType, selected) {
    if (filterType === "artist") {
      if (selected !== "All") {
        return props.filterSetGenre.filter(function (song) {
          return song.data.artist === selected;
        });
      }
    }
    if (filterType === "genre") {
      if (selected !== "All") {
        return props.filterSetArtist.filter(function (song) {
          return song.data.genre === selected;
        });
      }
    }
  }

  const handleFilter = useCallback(() => {
    let filteredSelection = props.songSelection;
    if (selected === "All") {
      props.setFilteredState(false);
    } else {
      filteredSelection = filterSongs(props.filter, selected);
      props.setFilteredState(true);
    }
    props.setSelectionState(filteredSelection);
  });

  const handleChange = useCallback((e) => {
    if (props.reset) {
      props.resetState(false);
    }
    setSelected(e);
  });

  return (
    <div className="w-full">
      <Listbox value={props.reset ? "All" : selected} onChange={handleChange}>
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
                    {props.reset ? "All" : selected}
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
                  {options.map((item, i) => (
                    <Listbox.Option
                      key={i}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "text-white bg-theme-primary"
                            : "text-slate-700",
                          "cursor-default select-none relative pl-3 pr-9 py-2"
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

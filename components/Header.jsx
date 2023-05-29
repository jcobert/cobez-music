import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "Music", to: "/music", current: false },
  { name: "About", to: "/about", current: false },
  { name: "Contact", to: "/contact", current: false },
];

const activeLinkStyle =
  "text-theme-primary font-bold border-b border-slate-300 rounded-b-none hover:rounded-md hover:bg-white hover:text-theme-primary hover:border-white";

const activeLinkStyleMobile =
  "text-slate-50 hover:text-slate-100 bg-slate-400 hover:bg-slate-500";

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 70);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  function handleHamburger(e) {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <Disclosure
        as="nav"
        className={`bg-gray-100 fixed w-full z-50 top-0 shadow-md mb-16`}
        onClick={setVisible}
      >
        {({ close }) => (
          <>
            <div className="max-w-layoutMax mx-auto px-2 sm:px-8 md:px-10 lg:px-16">
              <div
                className={`relative flex items-center justify-between h-16 ${
                  visible ? "h-16" : "h-[2.5rem]"
                } transition-all`}
              >
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button
                    onClick={handleHamburger}
                    className={`inline-flex items-center justify-center p-2 rounded-md text-theme-primary hover:text-white hover:bg-theme-primary focus:outline-none
                    ${visible ? "" : "p-1 m-1"}
                    `}
                  >
                    <span className="sr-only">Open navigation menu</span>
                    {menuOpen ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                  <div
                    className="flex-shrink-0 flex items-center font-cookie text-4xl text-theme-primary hover:text-theme-secondary transition"
                    onClick={() => {
                      close();
                      menuOpen ? handleHamburger() : null;
                    }}
                  >
                    <Link href={"/"}>Cobez</Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6 my-auto">
                    <div className="flex space-x-4 items-center">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.to}>
                          <a
                            className={`text-lg transition-all px-3 py-2 rounded-md text-theme-primary hover:bg-theme-primary hover:text-white ${
                              visible ? "" : "text-lg py-0"
                            } ${
                              router.asPath === item.to ? activeLinkStyle : ""
                            }`}
                            aria-current={item.current ? "page" : undefined}
                            onClick={close}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
            >
              <Disclosure.Panel className="sm:hidden">
                <div
                  className="px-2 pt-2 pb-3 space-y-1"
                  onClick={handleHamburger}
                >
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.to}>
                      <a
                        className={`text-xl leading-8 text-theme-primary hover:bg-theme-primary hover:text-white block px-3 py-2 rounded-md text-right ${
                          router.asPath === item.to ? activeLinkStyleMobile : ""
                        }`}
                        aria-current={item.current ? "page" : undefined}
                        onClick={close}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Header;

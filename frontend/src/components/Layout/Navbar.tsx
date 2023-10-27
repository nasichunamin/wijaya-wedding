import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { storageService } from "../../services";

export function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [token, setToken] = useState<String>("");

  //   const [colorChange, setColorchange] = useState(false);
  //   const changeNavbarColor = () => {
  //     if (window.scrollY >= 5) {
  //       setColorchange(true);
  //     } else {
  //       setColorchange(false);
  //     }
  //   };
  // window.addEventListener('scroll', changeNavbarColor);
  //   useEffect(() => {
  //     window.addEventListener('scroll', changeNavbarColor);
  //   });
  useEffect(() => {
    const user = storageService.getToken();
    setToken(user ? user : "");

    // console.log({ user });
    // console.log({ paket });
  }, [token]);
  return (
    <nav
      className={` bg-[#ffffff]
        p-1  fixed w-full z-20 top-0 left-0 border-b border-gray-200`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center justify-center ">
          <img
            className=" pt-2"
            src="assets/img/wijaya-wedding.png"
            width={80}
            // height={100}
            alt=""
          />
        </a>
        <button
          type="button"
          className="ml-3 inline-flex items-center justify-center text-3xl text-[#e8bd22] hover:text-gray-900 md:hidden px-4"
          onClick={
            showMobileNav === false
              ? () => setShowMobileNav(true)
              : () => setShowMobileNav(false)
          }
        >
          <span className="sr-only">Open main menus</span>
          <GiHamburgerMenu />
        </button>
        <div
          className={`${
            showMobileNav ? "" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul
            className={`mt-4 flex flex-col rounded-lg  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium md:dark:bg-transparent md:items-center`}
          >
            <li className={`  hover:duration-200 py-3 pr-1 pl-1`}>
              <a
                href="/"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  showMobileNav
                    ? " md:text-[#e8bd22] text-black hover:text-[#e8bd22] "
                    : "md:text-black text-[#e8bd22] hover:text-black "
                } `}
                aria-current="page"
              >
                Beranda
              </a>
            </li>
            <li className={`hover:duration-200 py-3 pr-1 pl-1 `}>
              <a
                href="/about"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  showMobileNav
                    ? " md:text-[#e8bd22] text-black hover:text-[#e8bd22] "
                    : "md:text-black text-[#e8bd22] hover:text-black "
                } `}
                aria-current="page"
              >
                Tentang
              </a>
            </li>
            <li className={`hover:duration-200 py-3 pr-1 pl-1 `}>
              <a
                href="/Paket"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  showMobileNav
                    ? " md:text-[#e8bd22] text-black hover:text-[#e8bd22] "
                    : "md:text-black text-[#e8bd22] hover:text-black "
                } `}
                aria-current="page"
              >
                Paket
              </a>
            </li>
            <li className={`hover:duration-200 py-3 pr-1 pl-1 `}>
              <a
                href="/about"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  showMobileNav
                    ? " md:text-[#e8bd22] text-black hover:text-[#e8bd22] "
                    : "md:text-black text-[#e8bd22] hover:text-black "
                } `}
                aria-current="page"
              >
                Portofolio
              </a>
            </li>

            <li className={`hover:duration-200 py-3 pr-1 pl-1 `}>
              <a
                href="/kontak"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  showMobileNav
                    ? " md:text-[#e8bd22] text-black hover:text-[#e8bd22] "
                    : "md:text-black text-[#e8bd22] hover:text-black "
                } `}
                aria-current="page"
              >
                Kontak
              </a>
            </li>
            <li>
              {/* <Link
                href="/contact"
                className="mt-2 block rounded-full bg-[#f9c300] py-1 text-center font-poppins-bold text-base text-black md:mt-1 md:py-3 md:px-6 hover:text-black hover:no-underline hover:bg-[#e8bd22]">
                REQUEST QUOTE
              </Link> */}
            </li>
          </ul>
        </div>

        <div
          className={`${
            showMobileNav ? "" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul
            className={`mt-4 flex flex-col rounded-lg  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium md:dark:bg-transparent md:items-center`}
          >
            {/* <li
              className={`hover:border-b-4  hover:duration-200 py-3 pr-3 pl-3 ${
                colorChange || showMobileNav ? 'hover:border-[#e8bd22] ' : 'hover:border-white '
              }`}>
              <a
                href="/"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  colorChange || showMobileNav
                    ? 'text-[#e8bd22]  hover:text-[#e8bd22]'
                    : 'text-black   hover:text-black'
                } `}
                aria-current="page">
                Home
              </a>
            </li> */}
            {token === "" ? (
              <li>
                <a
                  href="/login"
                  className="mt-2 block rounded-full border border-black py-1 text-center font-poppins-bold text-base text-black md:mt-1 md:py-2.5 md:px-5 hover:text-black hover:no-underline hover:bg-[#e8bd22] hover:border-[#e8bd22]"
                >
                  Masuk
                </a>
              </li>
            ) : (
              <li className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() =>
                      showProfile === false
                        ? setShowProfile(true)
                        : setShowProfile(false)
                    }
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                {showProfile ? (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    // tabIndex="-1"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      // tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      // tabIndex="-1"
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      // tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                ) : null}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

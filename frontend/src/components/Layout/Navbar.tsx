import React, { useState } from 'react';

export function Navbar() {
  const [showMobileNav] = useState<boolean>(false);
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
  return (
    <nav
      className={` bg-[#ffffff]
        p-1  fixed w-full z-20 top-0 left-0 border-b border-gray-200`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center justify-center ">
          {
            showMobileNav ? (
              // <Image className=" " src="/assets/img/logo-red.png" width={250} height={60} alt="" />
              <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                // width={250}
                // height={60}
                alt=""
              />
            ) : (
              <img
                className=" pt-2"
                src="assets/img/wijaya-wedding.png"
                width={80}
                // height={100}
                alt=""
              />
            )

            // <Image className=" " src="/assets/img/logo.png" width={250} height={60} alt="" />
          }
        </a>
        <div
          className={`${showMobileNav ? '' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-solid-bg">
          <ul
            className={`mt-4 flex flex-col rounded-lg  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium md:dark:bg-transparent md:items-center`}>
            <li
              className={`hover:border-b-4  hover:duration-200 py-3 pr-1 pl-1 ${
                showMobileNav ? 'hover:border-[#fb392f] ' : 'hover:border-white '
              }`}>
              <a
                href="/"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  showMobileNav
                    ? 'text-[#fb392f]  hover:text-[#fb392f]'
                    : 'text-black   hover:text-black'
                } `}
                aria-current="page">
                Beranda
              </a>
            </li>
            <li
              className={`hover:border-b-4  hover:duration-200 py-3 pr-1 pl-1 ${
                showMobileNav ? 'hover:border-[#fb392f] ' : 'hover:border-white '
              }`}>
              <a
                href="/about"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  showMobileNav
                    ? 'text-[#fb392f]  hover:text-[#fb392f]'
                    : 'text-black   hover:text-black'
                } `}
                aria-current="page">
                Tentang
              </a>
            </li>
            <li
              className={`hover:border-b-4  hover:duration-200 py-3 pr-1 pl-1 ${
                showMobileNav ? 'hover:border-[#fb392f] ' : 'hover:border-white '
              }`}>
              <a
                href="/about"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  showMobileNav
                    ? 'text-[#fb392f]  hover:text-[#fb392f]'
                    : 'text-black   hover:text-black'
                } `}
                aria-current="page">
                Paket
              </a>
            </li>
            <li
              className={`hover:border-b-4  hover:duration-200 py-3 pr-1 pl-1 ${
                showMobileNav ? 'hover:border-[#fb392f] ' : 'hover:border-white '
              }`}>
              <a
                href="/about"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  showMobileNav
                    ? 'text-[#fb392f]  hover:text-[#fb392f]'
                    : 'text-black   hover:text-black'
                } `}
                aria-current="page">
                Portofolio
              </a>
            </li>

            <li
              className={`hover:border-b-4  hover:duration-200 py-3 pr-1 pl-1 ${
                showMobileNav ? 'hover:border-[#fb392f] ' : 'hover:border-white '
              }`}>
              <a
                href="/kontak"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  showMobileNav
                    ? 'text-[#fb392f]  hover:text-[#fb392f]'
                    : 'text-black   hover:text-black'
                } `}
                aria-current="page">
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
          className={`${showMobileNav ? '' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-solid-bg">
          <ul
            className={`mt-4 flex flex-col rounded-lg  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium md:dark:bg-transparent md:items-center`}>
            {/* <li
              className={`hover:border-b-4  hover:duration-200 py-3 pr-3 pl-3 ${
                colorChange || showMobileNav ? 'hover:border-[#fb392f] ' : 'hover:border-white '
              }`}>
              <a
                href="/"
                className={`block rounded   font-poppins-medium text-base hover:no-underline  ${
                  colorChange || showMobileNav
                    ? 'text-[#fb392f]  hover:text-[#fb392f]'
                    : 'text-black   hover:text-black'
                } `}
                aria-current="page">
                Home
              </a>
            </li> */}

            <li>
              <a
                href="/contact"
                className="mt-2 block rounded-full border border-black py-1 text-center font-poppins-bold text-base text-black md:mt-1 md:py-2.5 md:px-5 hover:text-black hover:no-underline hover:bg-[#e8bd22]">
                Masuk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

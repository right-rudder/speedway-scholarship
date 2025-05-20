import { navbarLinks } from "../../data/navbarLinks.js";
import { mobileNavbarLinks } from "../../data/mobileNavbarLinks.js";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_NUMBER,
  LINKEDIN_URL,
  YOUTUBE_URL,
} from "../../consts";

import { SPEEDWAY_SCHOLARSHIP_LOGO_SEMI_TRANSPARENT as imgCompanyLogo } from "../../constsImages.js";
// import imgCompanyLogo from "../Speedway_schlarship_fund_logo.png";

const Navbar = ({ pathname }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [navBar, setNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMobile(() => !openMobile);
    if (!openMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [subHoveredIndex, setSubHoveredIndex] = useState(null);

  const isActive = (menuItem, pathname) => {
    let selected =
      menuItem?.submenu?.some(
        (item) =>
          item.link === pathname ||
          item.link + "/" === pathname ||
          item.subsubmenu?.some(
            (subItem) =>
              subItem.link === pathname || subItem.link + "/" === pathname,
          ),
      ) ||
      menuItem?.subsubmenu?.some(
        (item) => item.link === pathname || item.link + "/" === pathname,
      ) ||
      menuItem.link === pathname ||
      menuItem.link + "/" === pathname;
    return selected;
  };

  const handleItemClick = (index) => {
    if (hoveredIndex == index) {
      setHoveredIndex(null);
      setSubHoveredIndex(null);
    } else setHoveredIndex(index);
  };

  const handleSubItemClick = (event, subIndex) => {
    event.stopPropagation();
    if (subHoveredIndex == subIndex) setSubHoveredIndex(null);
    else setSubHoveredIndex(subIndex);
  };

  // Social media links configuration
  const socialLinks = [
    {
      name: "Facebook",
      url: FACEBOOK_URL,
      icon: <FaFacebook className="size-6" />,
    },
    {
      name: "Instagram",
      url: INSTAGRAM_URL,
      icon: <FaInstagram className="size-6" />,
    },
    {
      name: "LinkedIn",
      url: LINKEDIN_URL,
      icon: <FaLinkedin className="size-6" />,
    },
    {
      name: "YouTube",
      url: YOUTUBE_URL,
      icon: <FaYoutube className="size-6" />,
    },
  ];

  return (
    <nav className="w-full h-0 sticky inset-0 z-20 font-sans tracking-wider">
      {/*  Desktop menu  */}
      <div
        className={`${
          navBar || openMobile
            ? "bg-mariner-900/90 backdrop-blur-sm"
            : "bg-transparent"
        } duration-500`}
      >
        <div className="px-5 lg:px-20 max-w-8xl mx-auto top-0">
          <div
            className={`${navBar || openMobile ? "lg:h-20" : "lg:h-28"} relative flex h-20 align-middle justify-between transition-all`}
            id="navbar"
          >
            <div className="flex w-full items-center justify-between">
              <a
                href="/"
                title=" "
                className="relative hover:brightness-110 duration-200 ease-in-out w-full md:w-1/3 lg:w-2/12 px-1 py-1"
              >
                <img
                  src="/speedway_scholarship_logo_no_background.png"
                  alt=""
                  aria-label="Speedway Scholarship Fund Logo" // Descriptive aria-label
                  title="Speedway Scholarship Fund Logo"
                  loading="eager"
                  className={`${navBar || openMobile ? "h-16 lg:h-24 lg:w-2/3" : "h-16 lg:h-24 w-full"} mx-auto object-contain duration-500`}
                />
              </a>
              <div className="hidden lg:flex pl-10 lg:pl-20 w-full">
                <ul className="flex justify-between align-middle w-full  items-center gap-2">
                  {navbarLinks.map((item, index) => (
                    <li
                      key={index}
                      className={`${isActive(item, pathname) ? "decoration-transparent underline font-bold" : "font-medium"} py-0 uppercase tracking-tight relative group last:no-underline last:px-0`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target={`${item.link.includes("http") ? "_blank" : "_self"}`}
                          className="font-medium font-sans text-lg duration-300 hover:underline decoration-primary-700 decoration-4 underline-offset-[10px] py-12 border-accent whitespace-nowrap group-last:font-bold group-last:hover:text-primary-950 group-last:bg-primary-800 group-last:py-3 group-last:px-5 group-last:rounded-sm group-last:hover:bg-primary-900 group-last:hover:no-underline"
                        >
                          <span className="relative font-light text-white group-last:text-white">
                            {item.name}
                          </span>
                        </a>
                      ) : (
                        <span className="font-light cursor-default text-white text-lg duration-300 hover:underline decoration-accent-900 decoration-4 underline-offset-[10px] py-12 whitespace-nowrap">
                          {item.name}
                        </span>
                      )}
                      {item.submenu && item.submenu.length > 0 && (
                        <ul
                          className={`absolute top-14 bg-mariner-900/90 border-b-4 border-mariner-900/20 whitespace-nowrap text-primary-50 -left-4 duration-200 ease-out ${hoveredIndex === index ? "max-h-auto w-auto opacity-100" : "max-h-0 h-0 opacity-0 overflow-hidden"}`}
                        >
                          {item.submenu.map((subitem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`${isActive(subitem, pathname) ? "bg-accent-100 text-primary-900" : ""} relative hover:bg-primary-800 hover:text-white hover:scale-105 px-1 hover:font-semibold hover:shadow-sm drop-shadow-sm font-medium`}
                              onMouseEnter={() => setSubHoveredIndex(subIndex)}
                              onMouseLeave={() => setSubHoveredIndex(null)}
                            >
                              {subitem.link ? (
                                <a
                                  className="p-3 block"
                                  href={subitem.link}
                                  target={`${subitem.link.includes("http") ? "_blank" : "_self"}`}
                                >
                                  {subitem.name}
                                </a>
                              ) : (
                                <span className="cursor-default p-3 block">
                                  {subitem.name}
                                </span>
                              )}

                              {subitem.subsubmenu &&
                                subitem.subsubmenu.length > 0 && (
                                  <ul
                                    className={`absolute z-20 top-0 bg-primary-700/80 whitespace-nowrap left-full duration-500 ${subHoveredIndex === subIndex ? "max-h-auto w-auto opacity-100" : "max-h-0 w-0 opacity-0 overflow-hidden"}`}
                                  >
                                    {subitem.subsubmenu.map(
                                      (subsubitem, subsubIndex) => (
                                        <li
                                          key={subsubIndex}
                                          className={`${isActive(subsubitem, pathname) ? "bg-accent-100 text-accent-900" : ""} relative hover:bg-accent-700 hover:text-white`}
                                        >
                                          <a
                                            href={subsubitem.link}
                                            target={`${subsubitem.link.includes("http") ? "_blank" : "_self"}`}
                                            className="block p-3"
                                          >
                                            {subsubitem.name}
                                          </a>
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                type="button"
                className="mobile-menu-button relative inline-flex items-center justify-center rounded-md p-2"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleHamburgerClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${openMobile ? "hidden" : "block"} h-6 w-6 text-accent-100`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.0"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="x-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  className={`${openMobile ? "block" : "hidden"} h-6 w-6 text-white`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.0"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Mobile menu  */}
      <div
        className={`${
          openMobile ? "max-h-screen opacity-100" : "max-h-0 opacity-60"
        } overflow-x-hidden duration-500 delay-200 ease-in-out h-screen lg:hidden absolute w-full bg-gradient-to-b from-black via-primary-950 to-accent-950 z-20 top-0`}
        id="mobile-menu"
      >
        <div className="flex justify-end pl-5 pr-[26px] py-6">
          <svg
            className={`${openMobile ? "opacity-100" : "opacity-0"} h-6 w-6 text-accent-100 cursor-pointer z-30 text-primary-900-50 duration-300`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            aria-hidden="true"
            id="hamburger-icon"
            onClick={handleHamburgerClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <a
          href="/"
          className="z-30 relative flex justify-center items-center align-middle"
        >
          <img
            src={imgCompanyLogo}
            alt=""
            aria-label="  Logo"
            title=" "
            className="object-contain h-20 w-auto drop-shadow-sm"
          />
        </a>

        <div
          className={`absolute w-full h-44 bg-mariner-900 top-0 z-20 duration-300 ease-in-out  ${
            openMobile
              ? "translate-y-0 opacity-90"
              : "translate-y-full opacity-0"
          }`}
        ></div>

        <ul className="px-4 pb-3 mt-5 pt-2 flex flex-col align-middle items-center">
          {mobileNavbarLinks.map((item, index) => (
            <li
              key={index}
              className="relative group border-b border-accent-200/20 last:border-none w-full text-center"
              onClick={() => handleItemClick(index)}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target={`${item.link.includes("http") ? "_blank" : "_self"}`}
                  className="font-bold p-5 block text-xl duration-300 text-primary-100 border-accent-900 whitespace-nowrap group-last:bg-mariner-900 group-last:font-medium group-last:border-2 group-last:mt-12 group-last:py-4 group-last:px-8 group-last:rounded-full group-last:text-center group-last:mx-5"
                >
                  {item.name}
                </a>
              ) : (
                <div className="font-medium relative p-5 w-full justify-center text-white flex cursor-pointer text-xl duration-300 border-accent whitespace-nowrap">
                  <p>{item.name}</p>
                  <div
                    className={`absolute right-3 p-2 pointer-events-none duration-500 ease-in-out rounded-full ${hoveredIndex === index ? "bg-primary/30 -rotate-90" : "bg-primary/30 rotate-90"} 
                    `}
                  >
                    <IoIosArrowForward
                      className={`${hoveredIndex === index ? "text-accent-800" : "text-accent-900"} size-5`}
                    />
                  </div>
                </div>
              )}
              {item.submenu && item.submenu.length > 0 && (
                <ul
                  className={`mx-auto bg-primary-700/40 whitespace-nowrap left-0 duration-500 overflow-hidden ${hoveredIndex === index ? "max-h-[50rem]" : "max-h-0"}`}
                >
                  {item.submenu.map((subitem, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative border-b border-primary-100/20 w-full"
                      onClick={(event) => handleSubItemClick(event, subIndex)}
                    >
                      {subitem.link ? (
                        <a
                          className="p-5 block font-normal text-primary-200"
                          href={subitem.link}
                          target={`${subitem.link.includes("http") ? "_blank" : "_self"}`}
                        >
                          {subitem.name}
                        </a>
                      ) : (
                        <div className="font-normal p-5 w-full justify-between flex cursor-pointer text-lg duration-300 border-accent whitespace-nowrap">
                          <p>{subitem.name}</p>
                          <div
                            className={`p-1 pointer-events-none duration-300 rounded-full ${subHoveredIndex === subIndex ? "bg-white rotate-90" : "bg-accent-900 -rotate-90"} 
                    `}
                          >
                            <IoIosArrowForward
                              className={`${subHoveredIndex === subIndex ? "text-accent-500" : "text-accent-100"} size-5`}
                            />
                          </div>
                        </div>
                      )}

                      {subitem.subsubmenu && subitem.subsubmenu.length > 0 && (
                        <ul
                          className={`ml-8 whitespace-nowrap left-full duration-500 overflow-hidden ${subHoveredIndex === subIndex ? "max-h-fit" : "max-h-0"}`}
                        >
                          {subitem.subsubmenu.map((subsubitem, subsubIndex) => (
                            <li key={subsubIndex} className="relative">
                              <a
                                href={subsubitem.link}
                                target={`${subsubitem.link.includes("http") ? "_blank" : "_self"}`}
                                className="block p-5 font-bold"
                              >
                                {subsubitem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="p-5 px-10 font-bold flex flex-col justify-center align-middle items-center gap-5 overflow-hidden">
          <div className="flex gap-3 items-center text-white">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="border p-2 w-fit border-accent-200 rounded-full bg-mariner-900"
              aria-label={`Call us at ${PHONE_NUMBER}`}
            >
              <FaPhone className="size-4 text-white" />
            </a>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          </div>

          <div className="flex gap-3 mt-2 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit our ${social.name} page`}
                className="text-white hover:text-white transition-colors duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className=" w-full p-4 px-5 md:px-10 fixed top-0 bg-white flex items-center justify-between z-50">
      <div>
        <a className="w-max py-3 font-bold text-lg " href="/">
          Estate<span className="text-blue-600">Group</span>
        </a>
      </div>
      <button className="inline-block sm:hidden px-3 z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black rounded transition-all ease duration-200 "
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black rounded transition-all ease duration-200 "
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="w-3/3 md:w-max py-1 px-6 sm:px-8  font-medium capitalize items-center flex sm:hidden
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300"
        style={{
          top: click ? "2.5rem" : "-5rem",
        }}
      >
        <Link
          href="/"
          className="text-sm md:text-lg mx-1 hover:scale-110 transition-all ease duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm md:text-lg mx-1 md:mx-2 hover:scale-110 transition-all ease duration-200"
        >
          About
        </Link>
        <Link
          href="/"
          className="text-sm md:text-lg mx-1 md:mx-2 hover:scale-110 transition-all ease duration-200"
        >
          Property
        </Link>
        <Link
          href="/teams"
          className="text-sm md:text-lg mx-1 hover:scale-110 transition-all ease duration-200"
        >
          Teams
        </Link>
      </nav>

      <nav
        className="w-max py-1 px-8 font-medium capitalize items-center hidden sm:flex
      fixed top-3 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link
          href="/"
          className="text-sm md:text-lg mx-1 hover:scale-110 transition-all ease duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm md:text-lg mx-1 md:mx-2 hover:scale-110 transition-all ease duration-200"
        >
          About
        </Link>
        <Link
          href="/property"
          className="text-sm md:text-lg mx-1 md:mx-2 hover:scale-110 transition-all ease duration-200"
        >
          Property
        </Link>
        <Link
          href="/teams"
          className="text-sm md:text-lg mx-1 hover:scale-110 transition-all ease duration-200"
        >
          Teams
        </Link>
      </nav>
    </header>
  );
};

export default Header;

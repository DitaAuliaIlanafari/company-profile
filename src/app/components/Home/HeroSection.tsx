import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImg from "@/../../public/assets/slide-2.jpg";

const HeroSection = () => {
  return (
    <article className="flex flex-col items-start justify-end mt-16 mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full 
        bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0"
      />
      <Image
        src={heroImg}
        placeholder="blur"
        alt="title"
        fill
        className="h-full md:w-full object-center object-cover rounded-3xl -z-10 "
      />
      <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
        <h1 className="font-bold capitalize bg-white p-1 md:p-3 mt-6 text-lg sm:text-xl md:text-3xl lg:text-4xl">
          Estate Group
        </h1>
        <p className=" hidden sm:inline-block mt-4 md:text-lg lg:text-xl text-white font-sans">
          Our mission is to empower clients through expert real estate services,
          fostering trust and long-term relationships by delivering personalized
          solutions and exceptional care in every step of their property
          journey.
        </p>
      </div>
    </article>
  );
};

export default HeroSection;

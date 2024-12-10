import Image from "next/image";
import React from "react";
import Pic from "@/../../public/assets/property-2.jpg";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] mt-24 flex flex-col md:flex-row items-center justify-center text-dark">
      <div className="w-full md:w-1/2 h-full flex justify-center ">
        <Image
          src={Pic}
          alt="image"
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center p-10 md:mr-12 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-2xl md:text-5xl">About Us</h2>
        <p className="font-medium capitalize mt-4 text-sm md:text-base">
          Welcome to Estate Group, where we pride ourselves on being leaders in
          the real estate industry. Founded in 2012, our company has grown from
          a small team of dedicated professionals to a full-service real estate
          firm. Our commitment to excellence, integrity, and customer
          satisfaction has been the driving force behind our success.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;

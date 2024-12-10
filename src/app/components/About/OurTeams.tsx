import React from "react";
import Link from "next/link";
import { Card } from "flowbite-react";
import Image from "next/image";
import Img1 from "@/../../public/assets/agent-1.jpg";
import Img2 from "@/../../public/assets/agent-4.jpg";
import Img3 from "@/../../public/assets/agent-7.jpg";

const OurTeams = () => {
  return (
    <section className="w-full mt-10 sm:mt-24  px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl">
          Our Agent
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-5 mt-10 md:mt-16">
        <article className="col-span-1 row-span-1 relative">
          <Card className="max-w-sm border-blue-400">
            <div className="flex flex-col items-center">
              <Image
                alt="Bonnie image"
                height="96"
                src={Img1}
                width="96"
                className="mb-3 rounded-full shadow-lg"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900">
                Michael Scott
              </h5>
              <span className="text-sm text-center text-black">
                Sales Agent
              </span>
              <span className="text-sm text-center text-gray-500 mt-2">
                Michael has 10 years of experience in residential sales, known
                for closing deals quickly and effectively.
              </span>
            </div>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card className="max-w-sm border-blue-400">
            <div className="flex flex-col items-center">
              <Image
                alt="Bonnie image"
                height="96"
                src={Img2}
                width="96"
                className="mb-3 rounded-full shadow-lg"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900">
                Emily Davis
              </h5>
              <span className="text-sm text-center text-black">
                Sales Agent
              </span>
              <span className="text-sm text-center text-gray-500 mt-2">
                Emily specializes in luxury properties with 8 years of
                experience, focusing on client satisfaction.
              </span>
            </div>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card className="max-w-sm border-blue-400">
            <div className="flex flex-col items-center">
              <Image
                alt="Bonnie image"
                height="96"
                src={Img3}
                width="96"
                className="mb-3 rounded-full shadow-lg"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900">
                Jessica Miller
              </h5>
              <span className="text-sm text-center text-black">
                Sales Agent
              </span>
              <span className="text-sm text-center text-gray-500 mt-2">
                With 5 years of experience in real estate, Jessica excels in
                finding the perfect homes for her clients.
              </span>
            </div>
          </Card>
        </article>
      </div>
    </section>
  );
};

export default OurTeams;

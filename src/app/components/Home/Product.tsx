import React from "react";
import Link from "next/link";
import { Card } from "flowbite-react";
import RumahSatu from "@/../../public/assets/property-1.jpg";
import RumahDua from "@/../../public/assets/property-4.jpg";
import RumahTiga from "@/../../public/assets/property-3.jpg";
import RumahEmpat from "@/../../public/assets/property-5.jpg";
import Image from "next/image";

export const Product = () => {
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl">
          Our Properties
        </h2>
        <Link
          href="property"
          className="inline-block text-blue-500 font-medium text-accent underline underline-offset-2 text-base md:text-lg"
        >
          view all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-row-2 gap-5 mt-16">
        <article className="col-span-1 row-span-1 relative">
          <Card className="max-w-sm">
            <Image src={RumahSatu} alt="rumah" className="w-full" />
            <a href="#">
              <h5 className="text-xl mt3 font-semibold tracking-tight text-gray-900 dark:text-white">
                277 East Wellington
              </h5>
            </a>
            <div className="mt-3">
              <span className="text-xl font-md border border-solid border-black rounded-full p-2 text-gray-900 dark:text-white">
                $234000.00
              </span>
            </div>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card className="max-w-sm">
            <Image src={RumahDua} alt="rumah" className="w-full" />
            <a href="#">
              <h5 className="text-xl mt3 font-semibold tracking-tight text-gray-900 dark:text-white">
                571 Serenity Haven
              </h5>
            </a>
            <div className="mt-3">
              <span className="text-xl font-md border border-solid border-black rounded-full p-2 text-gray-900 dark:text-white">
                $456000.00
              </span>
            </div>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card className="max-w-sm">
            <Image src={RumahTiga} alt="rumah" className="w-full" />
            <a href="#">
              <h5 className="text-xl mt3 font-semibold tracking-tight text-gray-900 dark:text-white">
                315 Eclipse Manor
              </h5>
            </a>
            <div className="mt-3">
              <span className="text-xl font-md border border-solid border-black rounded-full p-2 text-gray-900 dark:text-white">
                $654000.00
              </span>
            </div>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card className="max-w-sm">
            <Image src={RumahEmpat} alt="rumah" className="w-full" />
            <a href="#">
              <h5 className="text-xl mt3 font-semibold tracking-tight text-gray-900 dark:text-white">
                190 Wilowbrok Estate
              </h5>
            </a>
            <div className="mt-3">
              <span className="text-xl font-md border border-solid border-black rounded-full p-2 text-gray-900 dark:text-white">
                $789000.00
              </span>
            </div>
          </Card>
        </article>
      </div>
    </section>
  );
};

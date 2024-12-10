import { Avatar, Blockquote, Rating, RatingStar, Card } from "flowbite-react";

import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full mt-10 sm:mt-24  px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-row-2 gap-5 mt-10 md:mt-16">
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm h-64 border-blue-500">
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-sm md:text-base font-normal text-gray-900 ">
                  "Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm h-64 border-blue-500">
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-sm md:text-base font-normal text-gray-900 ">
                  "Their dedication and market knowledge helped us find the
                  perfect home quickly and within our budget. We highly
                  recommend to anyone looking for a trustworthy agent."
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    The Lopez Family
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm h-64 border-blue-500">
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-sm md:text-base font-normal text-gray-900 ">
                  "Their made the entire process of selling our home. Their
                  professionalism, attention to detail, and excellent
                  communication skills were invaluable. It such a great
                  experience."
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    David and Laura Thompson
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;

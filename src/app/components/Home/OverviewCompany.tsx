import React from "react";
import { Card } from "flowbite-react";
import Link from "next/link";

const OverviewCompany = () => {
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl">
          Company Overview
        </h2>
        <Link
          href="about"
          className="inline-block text-blue-500 font-medium text-accent underline underline-offset-2 text-base md:text-md"
        >
          Learn More
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-5 mt-10 md:mt-16">
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm border-blue-500">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Lifestyle
            </h5>
            <p className="font-normal text-gray-700">
              We promote a healthy work-life balance, encouraging our team to
              pursue their passions and maintain a fulfilling your lifestyle.
            </p>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm border-blue-500">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Loan
            </h5>
            <p className="font-normal text-gray-700">
              Our loan team values trust, transparency, and collaboration,
              ensuring clients understand every step of the loan process.
            </p>
          </Card>
        </article>
        <article className="col-span-1 row-span-1 relative">
          <Card href="#" className="max-w-sm border-blue-500">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Sell
            </h5>
            <p className="font-normal text-gray-700">
              Our sales culture is driven by ambition and innovation, focusing
              on building long-term client relationships with integrity service.
            </p>
          </Card>
        </article>
      </div>
    </section>
  );
};

export default OverviewCompany;

import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className="bg-slate-900 h-screen flex flex-col items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white ">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl ">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 ">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-black  focus:ring-4 focus:outline-none
             rounded-lg text-sm px-5 py-2.5 text-center font-bold my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

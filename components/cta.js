"use client"
import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className=" flex-wrap items-center justify-between max-w-4xl gap-5  text-black py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl w-full sticky top-0 flex mx-auto bg-stone-200 dark:bg-stone-800  z-50 bg-[hsla(0,0%,100%,0.8)] px-6  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 backdrop-blur-[30px]">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to try-out this template?
          </h2>
          <p className="mt-2 font-medium text-gray-600 text-opacity-90 lg:text-xl">
            Don&apos;t let your visitors see a poor landing.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto  rounded-full bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong ">
            Download for Free
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;
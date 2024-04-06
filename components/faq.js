"use client";
import React from "react";

const Faq = () => {
  return (
    <div className="container  my-55 md:px-6 max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="mx-auto mb-12 max-w-510px text-center lg:mb-20">
            <span className="text-sm font-bold tracking-wider text-orange-600 uppercase ">
              Our work
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-1.2 text-dark dark:text-white sm:text-4xl md:text-40px">
              grow your business!
            </h2>
            <p className="text-base  py-4 text-center leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              Crafted with skill and care to help our clients grow their
              business!
            </p>
          </div>
      <section className="mb-32 ">
        <div className="container mx- text-center lg:text-left xl:px-32 mx-auto ">
          <div className=" grid items-center lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                <h3 className="mb-3 text-2xl font-bold">
                  We know how valuable your time is
                </h3>
                <h5 className="mb-12 text-lg font-bold text-primary dark:text-primary-400 lg:mb-10 xl:mb-12">
                  Let us answer your questions
                </h5>

                <p className="mb-4 font-bold">
                  Anim pariatur cliche reprehenderit?
                </p>
                <p className="mb-6 text-gray-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                  autem numquam dolore molestias aperiam
                </p>

                <p className="mb-4 font-bold">
                  Non cupidatat skateboard dolor brunch?
                </p>
                <p className="mb-6 text-gray-500 dark:text-neutral-300">
                  Distinctio corporis, iure facere ducimus quos consectetur ipsa
                  ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam
                  sed fugit iusto minus et suscipit?
                </p>

                <p className="mb-4 font-bold">
                  Praesentium voluptatibus temporibus consequatur non
                  aspernatur?
                </p>
                <p className="text-gray-500 dark:text-neutral-300">
                  Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                  deserunt ipsam sint aliquid dolores
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/075.jpg"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

"use client"
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Portfolio = () => {
  const images = [
    {
      original: "https://detroitconsultancy.com/assets/images/dPicture1.png",
      thumbnail: "https://detroitconsultancy.com/assets/images/dPicture1.png",
    },
    {
      original: "https://detroitconsultancy.com/assets/images/dPicture2.png",
      thumbnail: "https://detroitconsultancy.com/assets/images/dPicture2.png",
    },
    {
      original: "https://detroitconsultancy.com/assets/images/dPicture3.png",
      thumbnail: "https://detroitconsultancy.com/assets/images/dPicture3.png",
    },
  ];

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
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
      
         

          <div className="flex justify-center mt-12 text-center  sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={true}
              showNav={true}
              lazyLoad={true}
              infinite={false}
              useBrowserFullscreen={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

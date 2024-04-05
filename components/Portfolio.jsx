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
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our work
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
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

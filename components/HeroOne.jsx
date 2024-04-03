import React from "react";

const HeroOne = () => {
  return (
    
    <div>
      <div className="bg-gradient-to-b from-purple-50 dark:from-gray-800 via-orange-500 to-transparent dark:to-gray-900">
        <div
          className="container mx-auto px-4 py-5 sm:py-10"
        >
          <h1 className="text-3xl font-semibold leading-snug sm:text-5xl text-center text-gray-800 dark:text-white">
            Unlock your organization's full potential with our transformative
            health assessment.
          </h1>
          <p className="text-lg mt-4 sm:text-xl text-center text-gray-600 dark:text-gray-300">
            Detroit's expert evaluation not only identifies areas for
            improvement but also illuminates pathways to unprecedented growth
            and efficiency. Don't just scale up—thrive!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;

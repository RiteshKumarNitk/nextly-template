import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);

  const handleSetActiveTab = (path) => {
    setActiveTab(path);
  };

  const navigation = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/product" },
    { label: "Portfolio", path: "/features" },
    { label: "About us", path: "/pricing" },
    { label: "Testimonial", path: "/company" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <div className="w-full sticky top-0 flex mx-auto shadow-md bg-white dark:bg-slate-700 z-50">
      <nav className="navbar container relative flex flex-wrap items-center justify-between p-5 mx-auto lg:justify-between xl:px-0">
        {/* Logo */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium">
                    <span>
                      <Image
                        src="/img/logo.png"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-10"
                      />
                    </span>
                    <span className="text-gray-800 dark:text-white">Detroit</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-800 dark:text-white rounded-md lg:hidden hover:text-orange-500 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      passHref
                      className="w-full px-4 py-2 -ml-4 text-gray-800 dark:text-white rounded-md hover:text-orange-500 focus:text-orange-500 focus:outline-none"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    passHref
                    className="w-full px-6 py-2 mt-3 text-center lg:ml-5 border border-gray-800  dark:border-white rounded-full md:ml-5 text-gray-800 dark:text-white hover:bg-orange-500 hover:text-white"
                  >
                    Talk To us
                  </Link>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* Button Tabs */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <button
                  onClick={() => router.push(item.path)}
                  className={`${
                    activeTab === item.path ? "" : "hover:text-gray-800"
                  } relative rounded-full px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-white outline-sky-400 transition focus-visible:outline-2`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {activeTab === item.path && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 bg-black dark:text-slate-500 dark:bg-white mix-blend-difference"
                      style={{ borderRadius: 9999  }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Link Tabs */}
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/"
            passHref
            className="px-6 py-2 border border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-md md:ml-5 transition-all duration-300 ease-in-out hover:bg-orange-500 hover:text-white hover:border-orange-600"
          >
            Talk to us
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

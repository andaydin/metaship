import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const navigation = [
  { name: "Metaship", href: "/metaship" },
  { name: "Product", href: "/product" },
  { name: "Docs", href: "/" },
  { name: "Company", href: "/" },
];

const variants = {
  hidden: { opacity: 0, x: 0, y: -200, delay: 1 },
  enter: { opacity: 1, x: 0, y: 0, delay: 1 },
  exit: { opacity: 0, x: 0, y: 0, delay: 1 },
};

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.7 }} // Set the transition to linear
      className="z-50 sticky top-0"
    >
      <header
        className={`${
          small ? "bg-zinc-900" : "bg-transparent"
        } absolute w-full z-50 transition-all duration-500`}
      >
        <nav
          className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-2 lg:border-none">
            <div className="flex items-center">
              <a href="/">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-14 w-auto"
                  src="https://orkainformatics.com/assets/images/logo-white.png"
                  alt=""
                />
              </a>
              <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-blue-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </motion.div>
  );
};

export default Header;

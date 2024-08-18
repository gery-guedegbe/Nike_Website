import { motion, AnimatePresence } from "framer-motion";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggled, setToggled] = useState(false);

  const navMotion = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 25,
      },
    },
    hidden: {
      y: "-150vw",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  // Variants d'animation
  const logoVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const navLinksVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const hamburgerVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <header className="padding-x py-8 absolute z-[1000] w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo avec animation */}
        <motion.a
          href="/"
          variants={logoVariant}
          initial="hidden"
          animate="visible"
        >
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </motion.a>

        {/* Liens de navigation avec animation */}
        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <motion.li
              key={item.label}
              custom={index}
              variants={navLinksVariant}
              initial="hidden"
              animate="visible"
            >
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Icône Hamburger avec animation */}
        <motion.div
          className="hidden max-lg:block z-50"
          variants={hamburgerVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -25 }}
            transition={{ delay: 0.35 }}
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className={`w-10 h-10 z-[1100] flex flex-col items-center justify-center gap-2 bg-custom-neutral-50 rounded-xl xl:hidden`}
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 4 : 0 }}
              className="w-full h-0.5 bg-black rounded-full"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -6 : 0,
              }}
              className="w-full h-0.5 bg-black rounded-full"
            ></motion.span>
          </motion.div>
        </motion.div>
      </nav>

      {/* Contenu de la navbar */}
      <AnimatePresence>
        {toggled && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navMotion}
            translate="no"
            className="hidden fixed px-10 py-40 md:px-52 md:py-60 left-0 top-0 z-40 h-full w-full max-lg:flex flex-col items-center justify-center bg-white overflow-hidden"
          >
            <ul className="flex flex-col items-center justify-between gap-10 font-semibold font-montserrat leading-normal text-2xl text-slate-gray">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#abouts-us">About Us</a>
              </li>
              <li>
                <a href="#products" className="">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;

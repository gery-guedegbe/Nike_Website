import { motion } from "framer-motion";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
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
    <header className="padding-x py-8 absolute z-10 w-full">
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
          className="hidden max-lg:block"
          variants={hamburgerVariant}
          initial="hidden"
          animate="visible"
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </motion.div>
      </nav>
    </header>
  );
};

export default Nav;

import { motion } from "framer-motion";
import { copyrightSign } from "../assets/icons";
import footerLogo from "../assets/images/footer-logo.svg";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  // Variants d'animation
  const logoVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const linksVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="max-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col"
      >
        <motion.div
          variants={logoVariant}
          className="flex flex-col items-start"
        >
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="Footer Logo" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <motion.div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon, index) => (
              <motion.div
                key={icon.src}
                variants={iconVariant}
                custom={index}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer"
              >
                <a href={icon.href}>
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20">
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              custom={index}
              variants={linksVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer"
          variants={iconVariant}
        >
          <img
            src={copyrightSign}
            alt="Copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </motion.div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </motion.div>
    </footer>
  );
};

export default Footer;

import Button from "../components/Button";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const inputVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Subscribe = () => {
  return (
    <motion.section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h3
        className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold"
        variants={textVariants}
        transition={{ duration: 0.8 }}
      >
        Sign Up for <span className="text-coral-red">Updates </span> &
        Newsletter
      </motion.h3>
      <motion.div
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
        variants={inputVariants}
        transition={{ duration: 0.8 }}
      >
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Subscribe;

import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";

const SuperQuality = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="about-us"
      className="flex justify-center items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <motion.div
        className="flex flex-1 flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={textVariants}
      >
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We provide you <span className="text-coral-red">Super</span>{" "}
          <span className="text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-lg info-text">
          Ensuring premium confort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={imageVariants}
      >
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
};

export default SuperQuality;

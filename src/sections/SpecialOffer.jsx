import offer from "../assets/images/offer.svg";
import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: "0%", opacity: 1 },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SpecialOffer = () => {
  return (
    <motion.section
      className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.div
        className="flex-1"
        variants={imageVariants}
        transition={{ duration: 0.8 }}
      >
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </motion.div>
      <motion.div
        className="flex flex-1 flex-col"
        variants={textVariants}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SpecialOffer;

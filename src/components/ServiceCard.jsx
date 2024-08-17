import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <motion.div
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={cardVariants}
    >
      <div className="w-11 h-11 flex items-center justify-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;

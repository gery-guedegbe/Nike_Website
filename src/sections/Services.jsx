import { services } from "../constants";
import ServicesCard from "../components/ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      className="max-container flex justify-center flex-wrap gap-9"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}
    </motion.section>
  );
};

export default Services;

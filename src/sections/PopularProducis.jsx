import { motion } from "framer-motion";
import { products } from "../constants";
import PopularProducisCards from "../components/PopularProducisCards";

const PopularProducis = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="products"
      className="max-container max-sm:mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((products) => (
          <PopularProducisCards key={products.name} {...products} />
        ))}
      </div>
    </motion.section>
  );
};

export default PopularProducis;

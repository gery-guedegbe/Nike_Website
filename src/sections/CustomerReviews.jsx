import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CustomerReviews = () => {
  return (
    <motion.section
      className="max-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <motion.div
            key={review.customerName}
            variants={cardVariants}
            transition={{ duration: 0.8 }}
          >
            <ReviewCard {...review} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CustomerReviews;

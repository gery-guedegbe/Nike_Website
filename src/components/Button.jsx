import { motion } from "framer-motion";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`flex justify-between items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        backgroundColor
          ? `${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </motion.button>
  );
};

export default Button;

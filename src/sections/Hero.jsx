import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const controls = useAnimation();
  const ref = useRef(null);

  const handleImageChange = (newImageUrl) => {
    setBigShoeImg(newImageUrl);
  };

  // Variants d'animation
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const shoeImageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  // Observer pour détecter l'entrée dans le viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  // Fonction pour animer le compteur
  const animateCount = (targetValue) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const startCount = () => {
        if (count < targetValue) {
          setCount((prev) =>
            Math.min(prev + Math.ceil(targetValue / 100), targetValue)
          );
        }
      };

      const interval = setInterval(startCount, 30); // Vitesse de comptage
      return () => clearInterval(interval);
    }, [count, targetValue]);

    return count;
  };

  // Variants d'animation
  const statsVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.8 },
    }),
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
    >
      <motion.div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={textVariant}
          className="text-xl font-montserrat text-coral-red"
        >
          Our Summer Collection
        </motion.p>
        <motion.h1
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-normal font-bold"
          variants={textVariant}
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The new Arrival{" "}
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </motion.h1>
        <motion.p
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
          variants={textVariant}
        >
          Discover stylish comfort, and innovation for your active life.
        </motion.p>
        <motion.div variants={textVariant}>
          <Button label="Shop now" iconUrl={arrowRight} />
        </motion.div>
        <div
          ref={ref}
          className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"
        >
          {statistics.map((stat, index) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, "")); // Extraire les chiffres
            const suffix = stat.value.replace(/\d/g, ""); // Extraire le suffixe (comme "+")
            const animatedCount = animateCount(numericValue); // Animation du compteur

            return (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statsVariant}
                initial="hidden"
                animate={controls}
              >
                <p className="text-4xl font-palanquin font-bold">
                  {animatedCount}
                  {suffix}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
          variants={shoeImageVariant}
        />
        <div className="flex absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgUrl={shoe}
              ChangeBigShoeImage={handleImageChange}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

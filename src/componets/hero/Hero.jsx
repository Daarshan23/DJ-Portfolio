import "./Hero.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="wrapper">
        <motion.div
          className="textContanier"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>DARSHAN JAIN</motion.h2>
          {/* <motion.h1 variants={textVariants}>Full-Stack Developer</motion.h1> */}
           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Full Stack Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'UI/UX Designer',
        1000,
        'Build Simple & Attractive Websites',
        1000,
        // 'MERN Stack Developer',
        // 1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '88px', display: 'inline-block',fontStyle:"blod" }}
      repeat={Infinity}
    />
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me!</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slideText"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        MERN Stack Developer
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

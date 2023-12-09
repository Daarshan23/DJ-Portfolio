import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer1" variants={variants}>
        <p>
          I Focus On Helping Your Brand Grow
          <br />
          And More Creative
        </p>
        <hr />
      </motion.div>
      <motion.div className="tc" variants={variants}>
        <div className="Title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>Ideas
          </h1>
         
        </div>
        <div className="Title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}> For Your</motion.b>
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="lc" variants={variants}>
        <motion.div
          className="BOX"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            The goal of branding is to make a company stand out from its
            competitors by giving it a logo and slogan people will remember. The
            company’s principles, goals, and personality is what make up a
            brand. Branding that works well leaves a good impression on
            customers and makes them loyal and confident in the brand.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="BOX"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Design</h2>
          <p>
            Design is a discipline of study and practice focused on the
            interaction between a person — a ‘user’— and the man-made
            environment, taking into account aesthetic, functional, contextual,
            cultural and societal considerations. As a formalised discipline,
            design is a modern construct.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="BOX"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Development</h2>
          <p>
            A successful website does three things: It attracts the right kinds
            of visitors. Guides them to the main services or product you offer.
            Collect Contact details for future ongoing relation.
            <br />
            <br />
            <br />
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="BOX"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Testing</h2>
          <p>
            Testing can be stated as the process of verifying and validating
            whether a software or application is bug-free, meets the technical
            requirements as guided by its design and development, and meets the
            user requirements effectively and efficiently by handling all the
            exceptional and boundary cases. The process of software testing aims
            not only at finding faults in the existing software but also at
            finding measures to improve the software in terms of efficiency,
            accuracy, and usability.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

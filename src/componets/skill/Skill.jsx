import { useRef } from "react";
import "./skill.scss";
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

export const Skill = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skill"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="t1Container" variants={variants}>
        <motion.p whileHover={{ color: "orange" }}>
          Great web design without functionality
          <br />
          is like a sports car with no engine.
        </motion.p>
        <hr />
      </motion.div>
      `<motion.div className="t2Container" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Skills.</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="l1Container" variants={variants}>
               <motion.div
          className="BOX"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            <br />
            FrontEnd
          </h2>
          <p>
            React.JS
            <br />
            Spring
            <br />
            Angular.JS
            <br />
            <br />
            <br />
          </p>
        </motion.div>
        <motion.div
          className="BOX"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            <br />
            BackEnd
          </h2>
          <p>
            Node.JS
            <br />
            Java
            <br />
            <br />
            <br />
            <br />
          </p>
        </motion.div>
        <motion.div
          className="BOX"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>
            <br />
            DataBase
          </h2>
          <p>
            MY SQL
            <br />
            PLSQL
            <br />
            PostgreSQL
            <br />
            MongoDB
            <br />
            <br />
          </p>
        </motion.div>
      </motion.div>
`    </motion.div>
  );
};

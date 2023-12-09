import "./slide.scss";
import { Link } from "./link1/Link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Buttont } from "./buttont/Buttont";
const variants = {
  open: {
    clipPath:"circle(1200px at 50px 50px)",
    transition:{
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath:"circle(30px at 50px 50px)",
    transition:{
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
export const Slide = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="main" animate={open ? "open" : "closed"}>
      <motion.div className="reg" variants={variants}>
        <Link/>
      </motion.div>
      <Buttont setOpen={setOpen} />
    </motion.div>
  );
};

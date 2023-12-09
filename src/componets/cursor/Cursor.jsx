import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mousMove);

    return () => {
      window.removeEventListener("mousemove", mousMove);
    };
  },[]);
//   console.log(position);
  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x+10, y: position.y+10 }}
    ></motion.div>
  );
};

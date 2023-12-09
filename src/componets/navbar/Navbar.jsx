import { Sideebar } from "../sidebar/Sideebar";
// import { Sidebar } from "../sidebar/sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Sideebar/>
      {/* <sidebar/> */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        DJ -Dev
        </motion.span>
        <div className="Social">
          <a href="https://api.whatsapp.com/send?phone=918200014895" target="blank" referrerPolicy="no-referrer">
            <img src="/whatsapp.png" alt="" />
          </a>
          <a href="https://www.instagram.com/daarshan.23/" target="blank" referrerPolicy="no-referrer">
            <img src="/instagram.png" alt="" />
          </a>
          {/* <a href="#">
            <img src="/youtube.png" alt="" />
          </a> */}
          <a href="https://github.com/Daarshan23" target="blank" referrerPolicy="no-referrer">
            <img src="/git.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

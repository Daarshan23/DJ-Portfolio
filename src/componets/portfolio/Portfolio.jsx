import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Anime Valut",
    img: "https://i.postimg.cc/28y8NGNt/anime.png",
    desc: "Next 14 Server Side App with Server Actions, Infinite Scroll & Framer Motion Animations.Live Data Fetching with Shikimori-API",
    link: "https://ainme-info-dj-dev.vercel.app/",
  },
  {
    id: 2,
    title: "Tooo Dooo's",
    img: "https://i.postimg.cc/wvkm8nmh/Screenshot-645.png",
    desc: "Your Too Doos With Google Authentication & Realtime Database",
    link: "https://to-do-with-google.vercel.app/",
  },
  {
    id: 3,
    title: "Web-Music",
    img: "https://i.postimg.cc/Bb42Pc27/Screenshot-648.png",
    desc: "Web-Music Without ADS Soon...",
    link: "https://tse1.mm.bing.net/th?id=OIP.yTrt1w18n-bqLf_bw24PTAHaJn&pid=Api&P=0&h=220",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
        <button onClick={() => window.open(item.link)}>See</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

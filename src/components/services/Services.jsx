import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { rootMargin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        There is always one more bug to 
          <br />
         fix.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>My</motion.b> 
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Domain</motion.b> 
          </h1>
          <button></button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "transparent",
            color: "white",
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <h2>DSA</h2>
          <p>
          My passion lies in data structures and algorithms (DSA). I dedicate significant time to practicing on platforms like LeetCode and GeeksforGeeks. I have successfully solved over 300 problems on these platforms, constantly striving to enhance my DSA skills and remain at the forefront of algorithmic problem-solving.
          </p>
          {/*}
          <button>Go</button>{*/}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "transparent",
            color: "white",
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <h2>Web Development</h2>
          <p>
          My core strength lies in frontend web development, and I'm actively developing my backend skills.I have successfully completed numerous projects in web devlopement over the years. 
          </p>
          {/*}
          <button>Go</button>{*/}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            backgroundColor: "transparent",
            color: "white",
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <h2>Machine Learning</h2>
          <p>
          I'm diving deep into machine learning (ML) to broaden both my theoretical knowledge and practical abilities. I've gotten hands-on experience by tackling several mini-projects . These projects have sharpened my skills in selecting the right algorithms for real-world datasets and applying them effectively.
          </p>
           {/*}
          <button>Go</button>{*/}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
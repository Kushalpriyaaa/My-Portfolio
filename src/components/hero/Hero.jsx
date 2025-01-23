import "./hero.scss";
import { motion } from "framer-motion";
import {useTypewriter,Cursor} from "react-simple-typewriter";

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
        duration:5,
      },
    },
    
  };

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Passionate Coder", "Web Developer", "ML Enthusiast","Web Designer"],
    loop: Infinity,
    delaySpeed: 2000,
  });

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        ><motion.h2 variants={textVariants}>
        Hello, It's Me
      </motion.h2>
          <motion.h1 variants={textVariants}>KUSHAL PRIYA</motion.h1>
          <motion.h2 variants={textVariants}>
            And I'm a <span className="typewriter-text">{text}</span>
            <Cursor />
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              
            </motion.button>
            <motion.button variants={textVariants}></motion.button>

          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        <motion.div
         className="slidingTextContaier" variants={sliderVariants} initial="initial" animate="animate">
             Coder , Developer 


        </motion.div>
        <div className="imgageContainer">
            <img src="/file (1).png" alt="" />
        </div>
      </div>
    </div>
  );
};



export default Hero

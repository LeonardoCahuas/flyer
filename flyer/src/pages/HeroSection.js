import AnimatedCharacters from "../components/AnimatedCharacters";
import "../styles/herosection.css";
import { motion } from "framer-motion";
import { useState } from "react";

export const HeroSection = () => {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    /*{
      type: "heading1",
      text: "Una nuova App di Messaggistica!",
    },*/
    {
      type: "heading2",
      text: "Fai VOLARE i tuoi messaggi... ",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      className="hero hero-container-all"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}>
      <div className="text-left flex ml-12 hero-titles-container">
      <div className="flex-col titles-container">
        <h1 className="mb-8 text-5xl font-bold">
            Una nuova App di Messaggistica!
          </h1>
        {placeholderText.map((item, index) => {
          return (<div className="text-4xl pt-8 font-light"><AnimatedCharacters {...item} key={index} /></div>);
        })}
        <div className="plane-icon text-2xl mb-24"><i className="fa-solid fa-plane"></i></div>
      </div>
      </div>
    </motion.div>
  );
  {
    /* return (
    <div className="hero min-h-screen hero-container-all">
      <div className="hero main-title text-left text-neutral-content">
        <div className="max-w-md flex-end hero-titles-container">
          <h1 className="mb-5 text-5xl font-bold">
            Una nuova App di Messaggistica!
          </h1>
          <p className="mb-5 text-xl">
            Fai <strong className="text-xl italic font-mono volare-text">volare</strong> i tuoi messaggi... Inizia una chat con chi vuoi, quando vuoi e dove vuoi!
          </p>
          <button className="btn btn-primary btn-generic text-sm">Scopri di più</button>
        </div>
      </div>
    </div>
  );*/
  }
};

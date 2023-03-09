import AnimatedCharacters from "../components/AnimatedCharacters";
import "../styles/herosection.css";
import { motion } from "framer-motion";
import { useState, Link } from "react";
//import { LoginForm } from "./LoginForm";

export const HeroSection = () => {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
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
      className="hero hero-container-all mb-10"
      initial="hidden"
      //animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}>
      <div className="text-left flex flex-wrap items-center hero-titles-container">
      <div className="flex-col titles-container">
        <h1 className="mb-2 text-5xl font-bold">
            Una nuova App di Messaggistica!
          </h1>
        {placeholderText.map((item, index) => {
          return (<div className="text-2xl pt-8 font-light animated-characters-container"><AnimatedCharacters {...item} key={index} /></div>);
        })}
        <div className="plane-icon text-2xl mb-24"><i className="fa-solid fa-plane plane-under-words"></i></div>
      </div>
      <div className="empty-div visible"></div>
      {/*<div className="flex flex-wrap">
        <LoginForm />
      </div>*/}
      <div className="inizia-chat-container items-center py-12">
      <a href="http://localhost:3002/chat"><button className="btn btn-primary btn-generic">Inizia una chat</button></a>
      </div>
      </div>
    </motion.div>
  );
};

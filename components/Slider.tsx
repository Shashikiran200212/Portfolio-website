"use client";
import React, { useState, useEffect } from 'react';
import { ImagesSlider } from './ui/images-slidebar';
import { motion } from "framer-motion";

const Slider = () => {
  const [showText, setShowText] = useState(true);

  const images = [
    "/slider/a.jpg",  "/slider/a2.png", "/slider/a3.png", "/slider/a4.png",  "/slider/a6.png", "/slider/a7.png", "/slider/a8.png",  "/slider/a10.png", "/slider/a11.png",  "/slider/a13.png", "/slider/a14.png", "/slider/a15.png", "/slider/a16.png", "/slider/a17.png", "/slider/a18.png", "/slider/a19.png", "/slider/a20.png", "/slider/a21.png", "/slider/a22.png", "/slider/a23.png", "/slider/a24.png", "/slider/a25.png", "/slider/a26.png"
  ];

  const handleWatchButtonClick = () => {
    setShowText(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowText(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ImagesSlider className="h-[40rem] bg-black/60" images={images}>
      {showText && (
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col bg-black/80 py-5 px-10 border rounded-3xl justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Crafting immersive worlds with the power of  <br /> <span className='text-purple'> Blender </span> and <span className='text-purple'>Unreal Engine 5</span>
          </motion.p>
          <button
            onClick={handleWatchButtonClick}
            className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-2"
          >
            <span>Watch</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      )}
    </ImagesSlider>
  );
};

export default Slider;

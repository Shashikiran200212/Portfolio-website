"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Approach</span>
      </h1>
      
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
      {/* APPROACH CARDS */}
        <Card 
          title="Planning and Design" 
          icon={<AceternityIcon order="Phase1"/>}
          description="I start by understanding client needs and creating user-friendly designs with tools like Figma."
        >

          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
          title="Development and Implementation" 
          icon={<AceternityIcon order="Phase 2" />}
          description="I turn designs into responsive websites using HTML, CSS, and frameworks like React, NextJS, and Vite while following best coding practices."
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-violet-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
          {/* Radial gradient for the cute fade */}
         
        </Card>
        <Card 
          title="Testing and Deployment" 
          icon={<AceternityIcon order="Phase 3"/>}
          description="I test the site for quality and performance, then deploy it smoothly on platforms like Netlify, Vercel, or Hostinger."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-900"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description:string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition  duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{color: '#e4ecff'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: {order: string}) => {
  return (
    <div>
          <button className="inline-flex h-12 text-2xl px-6 py-4 font-bold animate-shimmer items-center justify-center rounded-sm border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            {order}
          </button> 
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};


export default Approach;
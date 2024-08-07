"use client"

import React, { useState, useEffect } from 'react';
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import GreetLoader from "@/components/GreetLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loader after the animation completes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200); // 5 languages * 3s each = 15s

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full"
        style={{
          userSelect:"none"
        }}
      >
        {loading ? (
          <GreetLoader/>
        ) : (
          <>
            <FloatingNav navItems={navItems}/>
            <Hero/>
            <Grid/>
            <RecentProjects/>
            <div className="hidden md:block">
              <Slider/>
            </div>
            <Experience/>
            <Approach/>
            <Footer/>
          </>
        )}
      </div>
    </main>
  );
}

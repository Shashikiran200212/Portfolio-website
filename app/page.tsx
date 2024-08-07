"use client";

import React from 'react';
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full" style={{ userSelect: "none" }}>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <div className="hidden md:block">
          <Slider />
        </div>
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Page;

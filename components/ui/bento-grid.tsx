'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./gridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/cofetti.json'
import MagicButton from './MagicButton'
import { IoCopyOutline } from "react-icons/io5";
import { FlipWords } from "./flip-words";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number,
  img:string,
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {


  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('edashashikiran@gmail.com')
    setCopied(true);
  }

  return (    
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 cursor-default",
        className
      )}
      style={{
        background: "rgb(22,26,66)",
        backgroundColor: "linear-gradient(90deg, rgba(22,26,66,1) 0%, rgba(22,26,66,1) 52%)",
        userSelect: "none" // Ensure text is not selectable
      }}
    >
      
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
            {img &&(
                <img
                    src={img}
                    alt={img}
                    className={cn(imgClassName, 'object-cover, object-center')}
                />
            )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
            {spareImg && (
                <img
                src={spareImg}
                alt={spareImg}
                className={'object-cover, object-center w-full h-full'}
            />
            )}
        </div>
        {id === 6 && (
            <BackgroundGradientAnimation>
                {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
            </BackgroundGradientAnimation>
        )}

          {id === 1 && (
                <BackgroundGradientAnimation>
                {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
              </BackgroundGradientAnimation>
            
          )}

          {id === 1 && (
          <div className="relative mx-4 sm:mx-10 mt-10 sm:mt-20 -mb-3 py-5">
          <p className="font-extralight text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            <q> 
              <i>
                I prioritize client collaboration and open communication to ensure projects align with client expectations. 
                By actively listening and maintaining transparent communication, I keep clients informed with regular updates and honest feedback. Scheduled check-ins facilitate real-time adjustments, 
                while collaborative tools ensure all stakeholders are on the same page. I remain adaptable to changes, educate clients about the development process, and provide ongoing support post-project to 
                foster lasting professional relationships. This approach builds trust and ensures the final product exceeds client expectations.
              </i>
            </q>
          </p>
        </div>
        
        
        )}


        <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-0 flex flex-col px-5 p-5 lg:p-10'
        )}>
            <div className="font-sans font-extralight md:max-w-35  md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
            </div>

            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                {title}
            </div> 
        

            <div className="relative">
  {id === 2 && (
    <div className="absolute inset-0 z-0">
      <GlobeDemo />
    </div>
  )}
  <div className="relative z-10">

  </div>
</div>



            {id === 3 && (
                <div className="relative sm:-left-10 flex items-center justify-start px-5">
                  <div className="text-3xl sm:text-6xl relative px-2 py-5 font-bold font-inter text-violetl dark:text-violet text-left">
                      <FlipWords words={["React JS", "Next JS", "Typescript", "Javascript", "Python", "Java", "Cloud"]} />
                      <br />
                  </div>
              </div>
                            
              )}

        {id === 6 && (
          <div className="mt-5 relative">
              <div className={'absolute -bottom-5 right-0'}>
                  <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings:{
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}/>
               </div>
                  
               <MagicButton
                  title = {copied ? 'Email copied' : 'Copy my Email'}
                  icon = {<IoCopyOutline/>}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
               />
           </div>
        )}

      </div>
    </div>
    </div>
  );
};

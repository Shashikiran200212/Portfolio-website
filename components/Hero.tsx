"use client"

import { BackgroundBeams } from './ui/background-beams'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { TextGenerateEffect2 } from './ui/text-generate-effect-2'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full  h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        
        <div className="h-screen w-full rounded-md dark:bg-black-100 bg-neutral-950  flex flex-col items-center justify-center antialiased absolute top-0 left-0">
            <div className="max-w-2xl mx-auto p-4">
                
            </div>
            <BackgroundBeams />
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Hi, my name is 
                </h2>
                <TextGenerateEffect
                    className='text-center text-[40px] -mt-2 md:text-5xl lg:text-8xl '
                    words='Shashi Kiran'
                />
                <TextGenerateEffect2
                    className='text-center text-[40px] md:text-5xl lg:text-4xl -mt-2'
                    words='A React.Js Developer'
                />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Building the Future of Web with <span className='text-purple'>Passion and Precision</span>
                </p>
            
                <a href="#about"> 
                    <MagicButton 
                        title ='Show my Work'
                        icon = {<FaLocationArrow/>}
                        position='left'
                    /> 
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero

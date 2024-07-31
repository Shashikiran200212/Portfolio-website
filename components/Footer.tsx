import React from 'react'
import MagicButton2 from './ui/MagicButton2'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5 'id='contact'>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Elevate
                <span className='text-purple'> Your </span> 
                Digital Experience!
            </h1>
            <p className='text-white-200 md:mt-5 my-3 text-center text-[15px]'>Contact me today to discuss how I can help you create the perfect website to meet your goals.</p>
            <a href="mailto:edashashikiran@gmail.com">
                <MagicButton2
                    title="Lets's Connect"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row relative flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">
                Copyright © 2024 Shashi Kiran
            </p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  bg-black-200 rounded-lg border  border-black-300'>
                        <a href={profile.link}>
                            <img src={profile.img}  width={20} height={20} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer

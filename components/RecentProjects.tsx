import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 mt-10'>
            {projects.map(({id, title, des, media, iconLists, link}) => (
                <div key={id} className='flex flex-col items-center h-auto p-4'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center  w-[70vw] h-[20vh] sm:w-[350px] sm:h-[20vh] overflow-hidden mb-4'>
                            <div className='relative w-full h-full rounded-xl bg-[#13162d]'>
                                {media?.type === 'video' ? (
                                    <video src={media.url} className='object-cover w-full h-full' autoPlay loop muted />
                                ) : (
                                    <img src={media?.url || "/bg.png"} alt={title} className='object-cover w-full h-full' />
                                )}
                            </div>
                        </div>
                       
                        <h1 className='font-bold lg:text-xl md:text-lg text-sm line-clamp-1'>
                            {title}
                        </h1>

                        <p className='lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-4 mb-2'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center' style={{transform:`translateX(-${5 * index}px)`}}>
                                        <img src={icon} alt="icon" className='p-1' />
                                    </div>
                                ))}
                            </div>

                            <div className='flex items-center'>
                                <p className='text-sm'>Check Live Site</p>
                                <FaLocationArrow className='ms-2 size-3' color='#cbacf9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects

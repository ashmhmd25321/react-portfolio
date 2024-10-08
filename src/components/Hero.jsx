import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1, 
        transition: {duration: 0.5, delay: delay},
    },
})

export const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className="flex flex-wrap">
                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-4xl sm:text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Mohomed Ashfak
                        </motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 lg:p-4">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x:100, opacity:0 }}
                            animate={{ x:0, opacity:1 }}
                            transition={{ duration:1, delay:1.2 }}
                            src={profilePic}
                            alt="Mohomed Ashfak"
                            className="
                                mt-[-30px] sm:mt-[-40px] lg:mt-[-110px]
                                brightness-75
                                shadow-lg hover:shadow-xl 
                                rounded-full
                                border-2 border-transparent
                                hover:scale-100 
                                transition-transform 
                                duration-300 
                                ease-out
                                ml-0 lg:ml-8  
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

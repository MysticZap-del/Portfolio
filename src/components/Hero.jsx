import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import ComputersCanvas from './canvas/Computers'; // Correct import path

const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const name = "Manthan";

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                {/* This below div is to get the vertical beautiful line */}
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                {/* Intro Text */}
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm{' '}
                        <motion.span
                            className='text-[#915eff]' // Removed 'flex'
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.20
                                    }
                                }
                            }}
                        >
                            {name.split('').map((char, idx) => (
                                <motion.span
                                    key={idx}
                                    variants={letterVariants}
                                    style={{ display: 'inline-block' }} // Keeps letters inline
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        A passionate coder who loves turning ideas into real solutions. From leading teams at hackathons to building projects that tackle real-world challenges, I thrive on collaboration, creativity, and continuous learning.
                    </p>
                </div>

            </div>
            // ...existing code...
            {/* centered 3D canvas below intro */}
            <div
                className="w-full flex justify-center items-center mt-48 mb-24"
                style={{ top: "55%" }}
            >
                <div
                    style={{
                        width: "90vw",
                        maxWidth: "600px",
                        height: "60vw",
                        maxHeight: "550px",
                    }}
                >
                    <ComputersCanvas />
                </div>
            </div>

            
        </section>
    );
};

export default Hero;
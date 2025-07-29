import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
    // tilt is giving the 3d effect when we hover on the card
    // it is a library that gives the 3D effect
    <Tilt className='xs:w-[250px] w-full'>
    {/* use framer motion for fade in animation */}
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
        </motion.div>
    </Tilt>
);
const About = () => {
    return (
        <div className="mt-44"> {/* Add margin-top here */}
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a passionate coder with experience in C++, JavaScript, and hands-on skills in frameworks like React, Spring Boot, and Node.js. I'm a quick learner who enjoys collaborating on projects that are scalable, efficient, and solve real-world challenges through clean and creative code. Let's build something amazing together!
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
               {services.map((service, index) => (
               <ServiceCard key={service.title} index={index} {...service} />
               ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");
// SectionWrapper is a higher-order component that wraps the About component with additional styles and functionality   

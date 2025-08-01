import React from 'react';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText + " text-white"}>My Work</p>
                <h2 className={styles.sectionHeadText + " text-white"}>Projects</h2>
            </motion.div>
            <div>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Here are some of my projects that showcase my skills and creativity. Each project reflects my passion for coding and problem-solving.
                </motion.p>
            </div>
            
            <div className='mt-20 flex flex-wrap gap-10 '>
              {projects.map((project, index) => (
                <motion.div
                    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                    className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
                    key={`project-${index}`}
                >
                    <div className='relative w-full h-[230px]'>
                        <img
                            src={project.image}
                            alt={project.name}
                            className='w-full h-full object-cover rounded-2xl'
                        />
                        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                            <div
                                onClick={() => window.open(project.source_code_link, "_blank")}
                                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                            >
                                <img
                                    src={github}
                                    alt='github'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
                        <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
                    </div>
                    <div className='mt-4 flex flex-wrap gap-2'>
                        {project.tags.map((tag) => (
                            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </motion.div>
              ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "works");
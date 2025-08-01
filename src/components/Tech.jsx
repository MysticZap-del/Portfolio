import BallCanvas from './canvas/Ball';
import { technologies } from '../constants';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "tech");

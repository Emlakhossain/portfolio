import React from 'react';
import './Skill.css';

const Skill = ({ skill }) => {
    console.log(skill)
    const { skillImg } = skill;
    return (
        <>
            <div className='mt-8'>

                <img src={skillImg} alt="" className='skill-img' />
            </div>
        </>
    );
};

export default Skill;
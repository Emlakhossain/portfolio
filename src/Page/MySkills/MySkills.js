import React, { useEffect, useState } from 'react';
import './MySkills.css';
import skill1 from '../../img/html-img.png';
import Skill from './Skill/Skill';

const MySkills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('skill.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    return (
        <div className='my-40 bg-gray-200 py-10 '>
            <div className='text-center pl-5'>
                <p className='font-bold text-info'>Why You chose me?</p>
                <h2 className='text-3xl font-bold '>My Skills</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-2 justify-items-center'>
                {
                    skills.map(skill => <Skill
                        key={skill.id}
                        skill={skill}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default MySkills;
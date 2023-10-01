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
        <div className='my-40 bg-gray-200 py-20 '>
            <div className='text-center pl-5'>
                <p className='font-bold text-info'>Why You chose me?</p>
                <h2 className='text-3xl font-bold '>My Skills</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pt-20'>
                <div className='pl-10'>

                    <p className='text-2xl font-bold pb-4'>Developer Skills:</p>
                    <p className='text-start font-bold'>HTML5:</p>
                    <p><input type="range" min="0" max="100" value="90" class="range range-xs range-secondary" /></p>
                    <p className='text-start font-bold'>CSS:</p>
                    <p><input type="range" min="0" max="100" value="80" class="range range-xs range-secondary" /></p>
                    <p className='text-start font-bold'>Javascript:</p>
                    <p><input type="range" min="0" max="100" value="65" class="range range-xs range-secondary" /></p>
                    <p className='text-start font-bold'>Software:</p>
                    <p><input type="range" min="0" max="100" value="60" class="range range-xs range-secondary" /></p>
                    <p className='text-start font-bold'>PLUGIN:</p>
                    <p><input type="range" min="0" max="100" value="70" class="range range-xs range-secondary" /></p>
                </div>
                <div className='px-10'>
                    <p className='text-2xl font-bold pb-4'>Design skills:</p>
                    <div className='flex justify-between'>
                        <p className='text-start font-bold'>Adobe Photoshop:</p>
                        <p className='font-bold text-end'>90%</p>
                    </div>
                    <p><input type="range" min="0" max="100" value="90" class="range range-xs range-success" /></p>
                    <div className='flex justify-between'>
                        <p className='text-start font-bold'>Figma:</p>
                        <p className='font-bold text-end '>80%</p>
                    </div>
                    <p><input type="range" min="0" max="100" value="80" class="range range-xs range-success" /></p>
                    <div className='flex justify-between'>
                        <p className='text-start font-bold'>Design:</p>
                        <p className='font-bold text-end'>60%</p>
                    </div>
                    <p><input type="range" min="0" max="100" value="60" class="range range-xs range-success" /></p>
                    <div className='flex justify-between'>
                        <p className='text-start font-bold'>GIT:</p>
                        <p className='font-bold text-end'>70%</p>
                    </div>
                    <p><input type="range" min="0" max="100" value="70" class="range range-xs range-success" /></p>
                    <div className='flex justify-between'>
                        <p className='text-start font-bold'>PLUGIN:</p>
                        <p className='font-bold '>70%</p>
                    </div>
                    <p><input type="range" min="0" max="100" value="70" class="range range-xs range-success" /></p>

                </div>
            </div>
        </div>
    );
};

export default MySkills;
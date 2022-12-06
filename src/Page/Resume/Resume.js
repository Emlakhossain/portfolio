import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MyResume from '../MyResume/MyResume';
import MySkills from '../MySkills/MySkills';
import MySkils from '../MySkills/MySkills';

const Resume = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold'>My Resume</h2>
            <div className='mt-20'>
                <MySkills></MySkills>
            </div>
        </div>
    );
};

export default Resume;
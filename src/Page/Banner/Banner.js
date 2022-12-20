import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../img/image.jpg';
import ContactUs from '../ContactUs/ContactUs';

const Banner = () => {
    const navigate = useNavigate();
    const contactHandler = () => {
        const path = "/contact"
        navigate(path);
    }

    return (
        <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-20 bg-gray-200 '>
            <div className='height-300 p-5'>

                <p className='text-start px-5 font-bold text-info text-2xl'>Hi, I,m</p>
                <h1 className='text-start px-5 font-bold text-5xl'> EMLAK HOSSAIN</h1>
                <p className='text-start p-5'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                <div className='flex gap-10'>
                    <div>
                        <button className='btn btn-info font-bold text-white rounded-full hover:bg-sky-700'>Download CV</button>
                    </div>
                    <div>
                        <button onClick={contactHandler} className='btn border-solid border-2 rounded-full border-indigo-600'>Contact Me</button>
                    </div>
                </div>
            </div>
            <div className='pl-20 rounded-2'>
                <img src={image} alt="" className='h-68 w-96' />
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../img/about.png';
import ContactUs from '../ContactUs/ContactUs';
import resume from '../../img/resume.pdf';


const Banner = () => {
    const navigate = useNavigate();


    return (
        <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-20 bg-gray-200 '>
            <div className='height-300 p-5'>

                <p className='text-start px-5 font-bold text-info text-2xl'>Hi, I'm</p>
                <h1 className='text-start px-5 font-bold text-5xl'> EMLAK HOSSAIN</h1>
                <p className='text-start p-5'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                <div className='flex gap-10'>
                    <div>
                        <a href={resume}
                            download="resume.pdf"
                        >
                            <button className='btn btn-info font-bold text-white rounded-full hover:bg-sky-700'>Download CV</button>
                        </a>
                    </div>
                    <div>
                        <Link to="/contact">  <button className='btn border-solid border-2 rounded-full border-indigo-600'>Contact Me</button></Link>
                    </div>
                </div>
            </div>
            <div className='pl-20 rounded-2'>
                <img src={image} alt="" className='h-68 w-96 rounded-tr-lg' />
            </div>
        </div>
    );
};

export default Banner;
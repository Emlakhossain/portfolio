import React from 'react';
import { FaBus, FaCode, FaFootballBall, FaMusic, FaPhoneAlt, FaRegEnvelope, FaUserAlt } from 'react-icons/fa';
import image from '../../img/about.png';


const AboutMe = () => {
    return (
        <div className='my-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='flex justify-end pr-10 '>
                    <img src={image} alt="" className='h-68' />
                </div>
                <div className='text-start '>
                    <h4 className='text-success font-bold'>My Intro</h4>
                    <h2 className='text-3xl font-bold'>About Me</h2>
                    {/* this is my personal intro section and i breafe deatil in here */}
                    <p className='pr-10 mt-10'>
                        Hello, I am Emlak Hossain. I hand done my course as a MERN Stock developer and Front-End developer from Programming Hero. Now I'm a prefessional programming minded persaon last 2 years and still.
                   <br/>
                        I love coding and create somethink special.When i faced any bug or like that's prblems then i browse on google and try to solve the problem. and personally I like peroblems so that I can learn deffirent new objects.
                    </p>

                    <div className=' gap-10 font-bold mt-10'>
                        <div className='flex justify-start items-center'>
                            <div className='text-info'>
                                <FaUserAlt />
                            </div>
                            <div className='  p-1 pl-10 '>
                                <p>MD Emlak Hossain</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center'>
                            <div className='text-info'>
                                <FaPhoneAlt />
                            </div>
                            <div className=' p-1 pl-10'>
                                <p>+8001740284295</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center'>
                            <div className='text-info'>
                                <FaRegEnvelope />
                            </div>
                            <div className=' p-1 pl-10'>
                                <p>imranmarin1990@gmail.com</p>
                            </div>
                        </div>


                    </div>


                    <div className='mt-10'>
                        <h4 className='text-2xl font-bold  text-success'>My Interests</h4>
                        <div className='flex gap-10 font-bold mt-20'>
                            <div className='flex justify-center items-center'>
                                <div className='text-info'>
                                    <FaMusic />
                                </div>
                                <div className='shadow-lg rounded p-1 px-4 '>
                                    <p>Music</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='text-info'>
                                    <FaBus />
                                </div>
                                <div className='shadow-lg rounded p-1 px-4'>
                                    <p>Travel</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='text-info'>
                                    <FaCode />
                                </div>
                                <div className='shadow-lg rounded p-1 px-4'>
                                    <p>Coding</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='text-info'>
                                    <FaFootballBall />
                                </div>
                                <div className='shadow-lg rounded p-1 px-4'>
                                    <p>Sports</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
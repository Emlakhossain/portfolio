import React from 'react';
import { FaBus, FaCode, FaFootballBall, FaMusic, FaPhoneAlt, FaRegEnvelope, FaUserAlt } from 'react-icons/fa';
import image from '../../img/image.png';


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
                    <p className='pr-10 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid repellendus dolores voluptate nobis enim molestias eum ipsa voluptatum architecto quae odio beatae velit est, temporibus laboriosam accusamus quam? Aspernatur dolore animi quod in voluptatem reiciendis incidunt, quisquam, ullam nostrum error ducimus, totam minima. Fugiat voluptatum alias non autem ducimus!</p>

                    <div className=' gap-10 font-bold mt-4'>
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


                    <h4 className='text-2xl font-bold mt-5 text-success'>My Interests</h4>
                    <div className='flex gap-10 font-bold mt-4'>
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
    );
};

export default AboutMe;
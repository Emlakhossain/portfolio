import React from 'react';
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
                    <p className='font-bold pt-5'>Name: Emlak Hossain (Imran)</p>
                    <p className='font-bold'>Contact Number: +8801740284295</p>
                    <p className='font-bold'>Email: imranmarin1990@gmail.com</p>
                    <h4 className='text-2xl font-bold mt-5 text-success'>My Interests</h4>
                    <div className='flex gap-10 font-bold '>
                        <div className='shadow-lg rounded p-1 '>
                            <p>Music</p>
                        </div>
                        <div className='shadow-lg rounded p-1 '>
                            <p>Travel</p>
                        </div>
                        <div className='shadow-lg rounded p-1 '>
                            <p>Photo</p>
                        </div>
                        <div className='shadow-lg rounded p-1 '>
                            <p>Sports</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
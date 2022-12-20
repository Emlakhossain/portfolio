import React from 'react';
import business from '../../img/business.png';
import online from '../../img/online.png';

const Blog = () => {
    return (
        <div className='my-40 bg-gray-200 p-10'>

            <h4 className='font-bold text-info'>Blogs</h4>
            <h1 className='font-bold text-3xl '>Latest Updates</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={business} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body ">
                        <p className='text-start'>JAN-2021</p>
                        <h2 class="card-title text-start">What is website optimization?</h2>
                        <div class="card-actions">
                            <a className='text-info hover:text-success hover:font-bold' href="https://www.optimizely.com/optimization-glossary/website-optimization/" target="_blank">View More info</a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img className='bg-gray-200' src={online} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body ">
                        <p className='text-start'>JUN-2021</p>
                        <h2 class="card-title text-start">How to grow business and maintain by online?</h2>
                        <div class="card-actions">
                            <a className='text-info hover:text-success hover:font-bold' href="https://www.linkedin.com/in/emlak-hossain/" target="_blank">View More info</a>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={business} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-start text-start">
                        <p className='text-start'>JUN-2022</p>
                        <h2 class="card-title">How to make website for your business?</h2>
                        <a className='text-info hover:text-success hover:font-bold' href="https://twitter.com/emlak_hossain" target="_blank">Red More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
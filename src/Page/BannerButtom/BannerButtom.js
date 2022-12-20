import React from 'react';

const BannerButtom = () => {
    return (
        <div className='flex justify-around items-center mx-auto  bg-white drop-shadow-2xl w-3/4 text-center -mt-10 h-32 rounded-full'>
            <div>
                <h4 className='font-bold'>2 Years Job</h4>
                <p className='text-info'>Experience</p>
            </div>
            <div>
                <h4 className='font-bold'>50+ Projects</h4>
                <p className='text-info'>Completed</p>
            </div>
            <div>
                <h4 className='font-bold'>Support 24/7</h4>
                <p className='text-info'>Online</p>
            </div>
        </div>
    );
};

export default BannerButtom;
import React from 'react';
import { FaAddressCard, FaHeadset, FaRegBookmark } from 'react-icons/fa';
import { IconName, VscTools } from "react-icons/vsc";

const BannerButtom = () => {
    return (
        <div className='flex justify-around items-center mx-auto  bg-white drop-shadow-2xl w-3/4 text-center -mt-10 h-32 rounded-full'>
            <div className='flex justify-center items-center'>
                <div className='text-info text-4xl'>
                    <FaRegBookmark />
                </div>

                <div className='px-4'>
                    <h4 className='font-bold'>2 Years Job</h4>
                    <p className='text-info'>Experience</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='text-info text-4xl'>
                    <FaAddressCard />
                </div>
                <div className='px-4'>
                    <h4 className='font-bold'>50+ Projects</h4>
                    <p className='text-info'>Completed</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='text-info text-4xl'>
                    <FaHeadset />
                </div>
                <div className='px-4'>
                    <h4 className='font-bold'>Support 24/7</h4>
                    <p className='text-info'>Online</p>
                </div>
            </div>
        </div>
    );
};

export default BannerButtom;
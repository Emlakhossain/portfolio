import { ThemeContext, ThemeProvider } from '@emotion/react';
import { Chip, Icon } from '@mui/material';
import themes from 'daisyui/src/colors/themes';
import React from 'react';
import { FaMapMarker, FaRegEnvelope } from 'react-icons/fa';
import { FiPhoneIncoming } from "react-icons/fi";

const ContactUs = () => {
    return (
        <div className='my-20'>
            <p className='text-center text-info font-bold'>Contact ME</p>
            <h3 className='text-3xl font-bold mb-10'>Get In Touch</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2  gap-4 my-20">
                <form class=" gap-5">

                    <div className='flex justify-between gap-5 ml-5'>
                        <input type="text" placeholder='Name' className='border border-indigo-600 w-6/12 p-2' required />
                        <input type="email" placeholder='Email' className='border border-indigo-600 w-6/12  p-2 ' required />
                    </div>
                    <div className='mr-5 mt-5'>
                        <input type="text" placeholder="Subject" class="border border-indigo-600 mt-2 p-2 w-full ml-5" required />
                        <textarea type="textarea" placeholder="Type here" class="border border-indigo-600 h-32 mt-5 w-full ml-5 p-2" required />
                        <button type="submit" className='btn btn-info mt-2 grid justify-items-start   w-48 mx-5'>Submit</button>
                    </div>
                </form>
                <div class=" mx-10">
                    <div className='flex justify-items-start items-center gap-5 text-start p-2'>
                        <div className='bg-info p-5 text-white rounded-full'>
                            <FiPhoneIncoming />
                        </div>
                        <div className='text-start px-4'>
                            <p className='font-bold'>Contact Number</p>
                            <p>01740284295</p>
                            <p>01740284295</p>
                        </div>
                    </div>
                    <div className='flex justify-items-start items-center  gap-5 my-4  p-2'>
                        <div className='bg-info p-5 text-white rounded-full'>
                            <FaRegEnvelope />
                        </div>
                        <div className='text-start px-4'>
                            <p className='font-bold'>Email</p>
                            <p>imranmarin1990@gmail.com</p>
                            <p>emlak.hossain7@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex justify-items-start items-center  gap-5  p-2'>
                        <div className='bg-info p-5 text-white rounded-full'>
                            <FaMapMarker />
                        </div>
                        <div className='text-start px-4'>
                            <p className='font-bold'>Location</p>
                            <p>Gulshan-2,</p>
                            <p>Dhaka-1212</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
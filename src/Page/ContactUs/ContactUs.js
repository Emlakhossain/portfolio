import React from 'react';

const ContactUs = () => {
    return (
        <div className='my-20'>
            <p className='text-center text-info'>Contact ME</p>
            <h3 className='text-2xl font-bold mb-10'>Get In Touch</h3>
            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 gap-5">

                    <div className='flex justify-between gap-5 ml-5'>
                        <input type="text" placeholder='Name' className='border border-indigo-600  p-2  w-2/4 ' />
                        <input type="email" placeholder='Email' className='border border-indigo-600 w-2/4 px-2 ml-5' />
                    </div>
                    <input type="text" placeholder="Type here" class="border border-indigo-600 mt-2 p-2 w-full ml-5 " />
                    <input type="textarea" placeholder="Type here" class="border border-indigo-600 mt-2 p-10 w-full ml-5 " />
                    <button type="submit" className='btn btn-info mt-2 justify-items-start'>Submit</button>
                </div>
                <div class="col-span-2 ...">02</div>
                <div class="row-span-2 col-span-2 ...">03</div>
            </div>
        </div>
    );
};

export default ContactUs;
import React from 'react';
import { useForm } from "react-hook-form";

const ContactUs = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='py-40'>
            <p className='font-bold'>CONTACT</p>
            <h2 className='font-bold text-5xl'>Contact With Me</h2>

            <div class="card card-side bg-base-100 shadow-xl py-20">
                <div className='text-start pl-10 font-bold'>
                    <h2 className='text-3xl font-bold'>Imran Ahmed</h2>
                    <p className='font-bold'>Chief Operating Officer</p>
                    <p >I am available for freelance work. <br /> Connect with me via and call in to my account.</p>
                    <p>Contact - 01740284295</p>
                    <p>Email: imranmarin1990@gmail.com</p>
                    <img src="https://placeimg.com/200/280/arch" alt="Movie" />
                </div>
                <div class="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="Text" placeholder="Name here" class="input input-bordered input-secondary w-full max-w-xs" required />
                        <br />
                        <input type="email" placeholder="Email" className=" my-3 input input-bordered input-secondary w-full max-w-xs" required />
                        <br />
                        <input type="password" placeholder="Password" class="input input-bordered input-secondary w-full max-w-xs" required />
                        <br />
                        <textarea class="textarea textarea-secondary w-full my-2 max-w-xs" placeholder="Bio"></textarea>
                        <br />
                        <input className='btn btn-info w-full max-w-xs mt-2' type="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
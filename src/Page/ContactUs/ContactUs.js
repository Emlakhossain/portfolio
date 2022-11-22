import React from 'react';
import { useForm } from "react-hook-form";

const ContactUs = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='pt-20'>
            <p className='font-bold'>CONTACT</p>
            <h2 className='font-bold text-5xl'>Contact With Me</h2>

            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="Text" placeholder="Name here" class="input input-bordered input-secondary w-full max-w-xs" required />
                        <br />
                        <input type="email" placeholder="Email" className=" input input-bordered input-secondary w-full max-w-xs" required />
                        <br />
                        <input type="password" placeholder="Password" class="input input-bordered input-secondary w-full max-w-xs" required />
                        <br />
                        <input className='btn btn-info w-full max-w-xs pt-2' type="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
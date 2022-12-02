import React from 'react';
import { useForm } from "react-hook-form";
import image from '../../img/image.png';

const ContactUs = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='py-40'>
            <p className='font-bold'>CONTACT</p>
            <h2 className='font-bold text-5xl'>Contact With Me</h2>

            <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 card card-side bg-base-100  py-20">
                <div class="card w-96 bg-base-100 ">
                    <figure class="px-10 pt-10">
                        <img src={image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-start">
                        <h2 className="card-title">Imran Ahmed</h2>
                        <p>Chife Operating Officer</p>
                        <p>Hello I am professional web application developer last year to running month</p>

                    </div>
                </div>
                <div class="card-body ">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='text-center font-bold mb-5'>Fill the box and send us your required</p>
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
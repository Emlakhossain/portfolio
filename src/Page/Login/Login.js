import React from 'react';

const Login = () => {
    return (
        <div className='bg-indigo-900 full'>
            <div className=' py-40 border border-red-900	'>
                <h2 className='text-2xl font-bold text-white pb-10'>Please Login</h2>
                <form>
                    <input className='p-2 my-4 w-1/3 rounded' type="text" name="name" placeholder='Your Name' id="" required /> <br />
                    <input className='p-2 w-1/3 rounded' type="email" name="email" placeholder='Your Email' id="" required /> <br />
                    <input className='p-2 my-4 w-1/3 rounded' type="password" name="password" placeholder='Password' id="" required /> <br />
                    <button name='submit' className='btn btn-info font-bold text-white rounded-full hover:bg-sky-700 mt-5 w-40'>Login</button>


                </form>
            </div>

        </div>
    );
};

export default Login;
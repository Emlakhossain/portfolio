import React from 'react';

const Qualification = () => {
    return (
        <div>
            <p className='text-info font-bold'>My Qualification</p>
            <h2 className='text-3xl font-bold hover:cursor-pointer hover:text-success'>Awesome Journey</h2>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-10 '>
                <div className=''>
                    <h2 className='text-3xl font-bold text-start ml-10'>Education</h2>
                    <section className='text-start border-l w-68 ml-10 mt-5  border-l-info pl-2'>
                        <h4 className='font-bold '>Bachelor of Administration</h4>
                        <p className='font-bold'>Political science</p>
                        <p className='text-info font-bold'>2011 - 2014</p>
                    </section>
                    <section className='text-start border-l w-68 ml-10 mt-5 border-l-info pl-2'>
                        <h4 className='font-bold'>Higher secondary School certificate</h4>
                        <p className='font-bold'>Business Study</p>
                        <p className='text-info font-bold'>2008 - 2009</p>
                    </section>
                    <section className='text-start border-l w-68 ml-10 mt-5 border-l-info pl-2'>
                        <h4 className='font-bold'>Secondary school certificate</h4>
                        <p className='font-bold'>Business study</p>
                        <p className='text-info font-bold'>2006 - 2007</p>
                    </section>

                </div>
                <div>
                    <h2 className='text-3xl font-bold text-center ml-10'>Experience</h2>
                    <section className='text-start border-l w-3/4  mt-5 m-10 border-l-info pl-2 mr-10'>
                        <h4 className='font-bold'>Font End Developer</h4>
                        <p className='font-bold'>MiM Fashion House</p>
                        <p className='text-info font-bold'>2021 - Running</p>
                    </section>
                    <section className='text-start border-l w-3/4  mt-5 ml-10 border-l-info pl-2 mr-10'>
                        <h4 className='font-bold'>MERN Stack Developer</h4>
                        <p className='font-bold'>Paragon Ceramic LTD</p>
                        <p className='text-info font-bold'>2021 - Running</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Qualification;
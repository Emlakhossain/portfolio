import React from 'react';
import image from '../../img/image.png';

const Banner = () => {
    return (
        <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-20 bg-gray-200 '>
            <div className='height-300 p-5'>
                <h4 className='font-bold text-start px-5'>WELCOME TO MY WORLD</h4>
                <h1 className='text-start px-5 font-bold text-5xl'>Hi I,m Imran Ahmed</h1>
                <p className='text-start p-5'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                <div className='grid grid-cols-2 gap-2'>
                    <div className=''>
                        <h4 className='font-bold text-start p-5'>FIND WITH ME</h4>
                        <div className='grid grid-cols-3 '>
                            <div>
                                <button className='btn btn-info'>Link</button>
                            </div>
                            <div>
                                <button className="btn btn-info">FB</button>
                            </div>
                            <div>
                                <button className="btn btn-info">Twi</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold text-start p-5'>BEST SKILL ON</h4>
                        <div className='grid grid-cols-3 '>
                            <div>
                                <button className='btn btn-info'>Link</button>
                            </div>
                            <div>
                                <button className="btn btn-info">Fb</button>
                            </div>
                            <div>
                                <button className="btn btn-info">Twi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pl-20 rounded-2'>
                <img src={image} alt="" className='h-96' />
            </div>
        </div>
    );
};

export default Banner;
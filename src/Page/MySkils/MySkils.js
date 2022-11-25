import React from 'react';
import './MySkills.css';

const MySkils = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold my-20'>My Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='pl-10'>
                    <h3 className='text-3xl font-bold'>Developer Skills:</h3>
                    <p className='text-start font-bold'>HTML5:</p>
                    <p><input type="range" min="0" max="100" value="90" class="range range-xs range-secondary" /></p>
                    <p className='text-start font-bold'>CSS:</p>
                    <p><input type="range" min="0" max="100" value="80" class="range range-xs range-secondary" /></p>
                    <p className='text-start font-bold'>Javascript:</p>
                    <p><input type="range" min="0" max="100" value="65" class="range range-xs range-secondary" /></p>
                    <p className='text-start font-bold'>Software:</p>
                    <p><input type="range" min="0" max="100" value="60" class="range range-xs range-secondary" /></p>
                    <p className='text-start font-bold'>PLUGIN:</p>
                    <p><input type="range" min="0" max="100" value="70" class="range range-xs range-secondary" /></p>
                </div>
                <div className='px-10'>
                    <h3 className='text-3xl font-bold'>Design skills:</h3>
                    <p className='text-start font-bold'>Adobe Photoshop:</p>
                    <p><input type="range" min="0" max="100" value="90" class="range range-xs range-success" /></p>
                    <p className='text-start font-bold'>Figma:</p>
                    <p><input type="range" min="0" max="100" value="80" class="range range-xs range-success" /></p>
                    <p className='text-start font-bold'>Design:</p>
                    <p><input type="range" min="0" max="100" value="65" class="range range-xs range-success" /></p>
                    <p className='text-start font-bold'>GIT:</p>
                    <p><input type="range" min="0" max="100" value="60" class="range range-xs range-success" /></p>
                    <p className='text-start font-bold'>PLUGIN:</p>
                    <p><input type="range" min="0" max="100" value="70" class="range range-xs range-success" /></p>
                </div>
            </div>
        </div>
    );
};

export default MySkils;
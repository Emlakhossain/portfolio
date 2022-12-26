import React from 'react';

const Project = ({ project }) => {
    const { image, projectName, url } = project;
    return (
        <div class="card w-68  ring-2 border-green-400 hover:cursor-pointer">
            <figure><img src={image} alt="Shoes" className='p-5 ' /></figure>
            <div class="card-body text-gray">
                <h2 class="card-title">
                    {projectName}
                </h2>
                <div className='flex justify-center'>
                    <button className=' btn btn-info mt-4 font-bold text-white w-3/4'><a href={url} target_blank>More Info</a></button>
                </div>

            </div>
        </div>
    );
};

export default Project;
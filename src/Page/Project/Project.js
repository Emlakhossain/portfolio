import React from 'react';

const Project = ({ project }) => {
    const { image, projectName } = project;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {projectName}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

            </div>
        </div>
    );
};

export default Project;
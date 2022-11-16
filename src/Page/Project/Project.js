import React from 'react';

const Project = ({ project }) => {
    const { image, projectName } = project;
    return (
        <div class="card w-96  shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body text-gray">
                <h2 class="card-title">
                    {projectName}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
            </div>
        </div>
    );
};

export default Project;
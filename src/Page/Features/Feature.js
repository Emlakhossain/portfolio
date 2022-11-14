import React from 'react';

const Feature = ({ feature }) => {
    const { featuresName, discription } = feature;
    return (
        <div class="card w-96 pt-10 content-center h-72 bg-slate-500 text-primary-content ">
            <div class="card-body text-start">
                <h2 class="card-title font-bold text-gray-400">{featuresName}</h2>
                <p>{discription}</p>

            </div>
        </div>
    );
};

export default Feature;
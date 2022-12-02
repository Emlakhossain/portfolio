import React from 'react';

const Feature = ({ feature }) => {
    const { featuresName, discription } = feature;
    return (
        <div class="card w-96 pt-10 content-center h-72   ring-2 ring-pink-300">
            <div class="card-body text-start">
                <h2 class="card-title font-bold ">{featuresName}</h2>
                <p>{discription}</p>

            </div>
        </div>
    );
};

export default Feature;
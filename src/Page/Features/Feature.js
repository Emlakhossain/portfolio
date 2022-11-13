import React from 'react';

const Feature = ({ feature }) => {
    const { featuresName, discription } = feature;
    return (
        <div class="card w-96 bg-slate-500 text-primary-content ">
            <div class="card-body text-start">
                <h2 class="card-title">{featuresName}</h2>
                <p>{discription}</p>
                <div class="card-actions justify-end">
                    <button class="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;
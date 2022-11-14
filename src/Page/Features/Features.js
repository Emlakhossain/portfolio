import React, { useEffect, useState } from 'react';
import Feature from './Feature';

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    return (
        <div className='p-5'>
            <div className=''>
                <h4 className='font-bold  text-start pl-5'>FEATURES</h4>
                <h2 className='text-5xl font-bold text-start pl-5'>What I Do</h2>
            </div>
            <div className='py-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                {
                    features.map(feature => <Feature
                        feature={feature}
                        key={feature.id}
                    ></Feature>)
                }
            </div>
        </div>

    );
};

export default Features;
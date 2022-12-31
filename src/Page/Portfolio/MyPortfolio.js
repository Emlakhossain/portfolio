import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const MyPortfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='p-5'>
            <div>
                <h4 className='font-bold text-red-600 py-5'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                <h2 className='text-6xl font-bold'>My Portfolio</h2>
                <p className='text-bold text-info'>Please visit my portfolio....</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto py-10 '>
                {
                    projects.map(project => <Project
                        project={project}
                        key={project.id}
                    ></Project>)
                }
            </div>

        </div>
    );
};

export default MyPortfolio;
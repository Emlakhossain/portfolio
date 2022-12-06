import React from 'react';
import { Link } from 'react-router-dom';

const MyResume = () => {
    return (
        <div>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/myskills">Professional Skills</Link></li>
        </div>
    );
};

export default MyResume;
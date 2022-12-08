import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/image.png';

const Navbar = () => {
    return (
        <div class="navbar bg-base-200">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">
                    <div class="avatar">
                        <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} />
                        </div>
                    </div>

                </a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Me</Link></li>
                    <li><Link to="/feature">Feature</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                    <li><a>Experts</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
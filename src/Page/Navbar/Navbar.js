import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/about.png';

const Navbar = () => {
    return (
        <div class="navbar bg-white sticky top-0">
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
                <ul class="menu menu-horizontal p-0 font-bold">
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Me</Link></li>
                    <li><Link to="/MyPortfolio">Portfolio</Link></li>
                    <li><Link to="/feature">Feature</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                    <li><Link to="/login">Login</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;
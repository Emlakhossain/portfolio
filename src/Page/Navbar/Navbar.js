import React from 'react';
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
                    <li><a>Resume</a></li>
                    <li><a>About Me</a></li>
                    <li><a>Experts</a></li>
                    <li><a>Contact Me</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
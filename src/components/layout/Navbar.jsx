import React from 'react';
import PropTypes from 'prop-types';
import {FaGithub} from "react-icons/fa";
import {Link} from "react-router-dom"; // Corrected the import

const Navbar = ({ title  }) => {
    return (
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
            <div className='container mx-auto'>
                <div className='flex-none px-2 mx-2'>
                    <FaGithub  className='inline pr-2 text-3xl'/>
                    <Link to='/' className='text-lg font-bold align-middle' >{title} </Link>
                </div>
                <div className='flex-1 px-2 mx-2'>
                    <div className='flex justify-end'>
                        <Link to='/' className="btn btn-ghost btn-sm">
                            HOME
                        </Link>
                        <Link to='/about' className="btn btn-ghost btn-sm">
                            ABOUT
                        </Link>
                    </div>
                </div>
            </div>
        </nav> // Display the title prop
    );
};

Navbar.defaultProps = {
    title: 'Github Finder',
};

Navbar.propTypes = {
    title: PropTypes.string,
};

export default Navbar; // Completed the export

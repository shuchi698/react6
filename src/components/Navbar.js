import React from "react";
import { Link } from 'react-router-dom';
import './../App.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to='/home' className='link'>Home</Link>
            <Link to='/students' className='link'>Students</Link>
            <Link to='/contact-us' className='link'>Contact US</Link>
        </div>
    )
}

export default Navbar;
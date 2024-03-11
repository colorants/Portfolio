import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#333745] text-gray-300'>
            <div>
                <img src={Logo} alt='logo' style={{ width: '50px' }} />
            </div>

            {/*menu bar*/}
            <ul className='hidden md:flex justify-center'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>


            {/* hamburger */}
            <div
                onClick={handleClick}
                id='hamburger'
                className='z-10 flex justify-end md:hidden'
                style={{ marginLeft: 'auto' }}
            >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            {/* mobile menu */}
            <div>
                <ul
                    className={
                        !nav
                            ? 'hidden'
                            : 'absolute top-0 right-0 w-full h-screen bg-[#333745] flex flex-col justify-center items-center'
                    }
                >
                    <li className='py-6 text-4xl'>
                        <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to="about" smooth={true} duration={500} onClick={handleClick}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to="projects" smooth={true} duration={500} onClick={handleClick}>
                            Projects
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>


            {/* social icons */}
            <div className= ' hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                           href='https://www.linkedin.com/in/viggo-van-der-ven-83b5a1232/' target='_blank'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                           href='https://github.com/colorants' target='_blank'>
                            Github <FaGithub size={30}/>
                        </a>
                    </li> <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                       href='/'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li> <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                       href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
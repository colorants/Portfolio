import React from 'react';
import Remote from '../assets/Projects/Remote.png';
import Planner from '../assets/Projects/Planner.png';
import Website from '../assets/Projects/Website.png';
import Game from '../assets/Projects/Game.png';
import Vedute from '../assets/Projects/Vedute.png';

const Projects = () => {
    return (
        <div name='projects' className=' md:h-screen w-full  bg-[#333745] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pt-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#7189FF]'>Projects</p>
            <p className='py-6'>Check out my projects. Listed oldest to newest</p>
        </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div
                    style={{backgroundImage: `url(${Remote})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider '>
IR Remote control
                             </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More info</button>
                                </a>

                            </div>
                    </div>
                </div>
                <div
                    style={{backgroundImage: `url(${Planner})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider justify-center '>
Appointent planner
                             </span>
                        <div className='pt-8 text-center'>
                            <a href='/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More info</button>
                            </a>
                            <a href='/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div
                    style={{backgroundImage: `url(${Website})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider '>
Accessibility website
                             </span>
                        <div className='pt-8 text-center'>
                            <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More info</button>
                            </a>
                            <a href='https://github.com/colorants/CLE3-Accessibility' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div
                    style={{backgroundImage: `url(${Game})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
Web-game
                             </span>
                        <div className='pt-8 text-center'>
                            <a href='/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More info</button>
                            </a>
                            <a href='/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div
                    style={{backgroundImage: `url(${Vedute})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider '>
Marketing for an <br/> art platform
                             </span>
                        <div className='pt-8 text-center'>
                            <a href='/' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More info</button>
                            </a>


                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Projects;
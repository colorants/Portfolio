import React from "react";

import JavaScript from "../assets/javascript.png";
import ReactIcon from "../assets/react.png";
import CSS from "../assets/css.png";
import HTMLIcon from "../assets/html.png";
import TailwindIcon from "../assets/tailwind.png";
import Git from "../assets/github.png";



const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#333745] text-gray-300 '>
            {/*container*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#7189FF]'>Skills </p>
                    <p className='py-4'> These are the tools I'm learning and using</p>
                </div>

                <div className='w-full grid grid-cols-4 sm:grid-cols-2 gap-4 text-center sm:pb-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='my-3 w-20 mx-auto' src={HTMLIcon}  alt='html'/>
                    <p className='my-3 '>HTML</p>
                </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                 <img className='my-3 w-20 mx-auto' src={CSS}  alt='html'/>
                 <p className='my-3'>CSS</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                 <img className='my-3 w-20 mx-auto' src={JavaScript}  alt='html'/>
                 <p className='my-3'>JavaScript</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                 <img className='my-3 w-20 mx-auto' src={ReactIcon}  alt='html'/>
                 <p className='my-3'>React</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                 <img className='my-3 w-20 mx-auto' src={TailwindIcon}  alt='html'/>
                 <p className='my-4'>Tailwind</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                 <img className='my-3 w-20 mx-auto' src={Git}  alt='html'/>
                 <p className='my-4'>Github</p>
             </div>
            </div>
        </div>
        </div>
    )
}

export default Skills;
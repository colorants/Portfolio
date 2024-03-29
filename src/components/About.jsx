import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#333745] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
               <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                   <div className='sm:text-right pb-8'>
                      <p className='text-4xl font-bold inline border-b-4 border-[#7189FF]'>
                          About
                      </p>
        </div>
                   <div></div>
                   </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold py-3'>
                <p>Hi. I'm Viggo nice to meet you. Please take a look around.</p>
            </div>
            <div >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
        </div>
        </div>

    )
}

export default About;
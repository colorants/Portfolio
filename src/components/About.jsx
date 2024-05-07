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
                <p>I am a student at the Hogeschool Rotterdam and following Creative Media & Game Technoglogies.
                Here we learn web development, make apps and get involved with a lot of new technologies, basically everything that has to do with the internet. After 4 years
                we have completed the course and we can call our self Creative Developers. On this website I will show my
                projects that I have developed in my years at CMGT. In my free time I like to play games and work on / drive cars.</p>
            </div>
        </div>
        </div>
        </div>

    )
}

export default About;
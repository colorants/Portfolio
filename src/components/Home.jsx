import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#333745]'>

        {/*    container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
                <p className='text-[#7189FF]'> Hi, my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'> Viggo van der Ven</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'> I'm a IT Student at Hogeschool Rotterdam. </h2>
                <p className='text-gray-500 py-4 max-w-[700px]'> Learning to code and a passion for cars...</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7189FF] hover:border-[#7189FF] duration-300'>View Work
                        <span className='group-hover:rotate-90 duration-300'>
                          <HiArrowNarrowRight className='ml-3'/>
                        </span>
                         </button>
                </div>

            </div>

        </div>
    )
}

export default Home;
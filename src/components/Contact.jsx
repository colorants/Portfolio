import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#333745] flex justify-center items-center p-4'>
            <form method='post' action="https://getform.io/f/f5ed0a94-569f-46ad-95e2-b950f1f49d48" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#7189FF] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'> Submit the form below or reach out to my using email - viggoven@gmail.com</p>
        </div>
                <input className='p-2 bg-[#c8c6d7]' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#c8c6d7]'    type='email' placeholder='Email' name='email' />
                <textarea className='bg-[#c8c6d7]' name='message' placeholder='Message' rows='10'></textarea>
                <button className='text-white group border-2 px-6 mx-auto py-3 my-8 flex items-center hover:bg-[#7189FF] hover:border-[#7189FF] duration-300'> Send </button>
        </form>
        </div>
    )
}

export default Contact;
import React from 'react'
import android from '../assets/android1.png';

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: android,
            title: 'Android',
            style: 'shadow-pink-400'
        },
        {
            id: 3,
            src: android,
            title: 'Android',
            style: 'shadow-pink-400'
        },
        {
            id: 4,
            src: android,
            title: 'Android',
            style: 'shadow-pink-400'
        },
        {
            id: 5,
            src: android,
            title: 'Android',
            style: 'shadow-pink-400'
        },
        {
            id: 6,
            src: android,
            title: 'Android',
            style: 'shadow-pink-400'
        },
    ];


    return (
        <div name="experience" className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>the technologies I worked on</p>
                </div>
                {/*  */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                            <img src={src} alt='' className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Experience
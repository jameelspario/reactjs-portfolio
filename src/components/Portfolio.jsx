import React from 'react'
import item1 from '../assets/item1.png';

export const Portfolio = () => {

    const protfolios = [
        {
            id: 1,
            src: item1
        },
        {
            id: 2,
            src: item1
        },
        {
            id: 3,
            src: item1
        },
        {
            id: 4,
            src: item1
        },
        {
            id: 5,
            src: item1
        },
        {
            id: 6,
            src: item1
        },
    ];

    return (
        <div name="portfolio"
            className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=''>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Portfolio 
                    </p>
                    <p className='py-6'>Check out some of my work</p>
                </div>
                {/* card */}


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        protfolios.map(({ id, src }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img
                                    src={src}
                                    alt=''
                                    className='w-full rounded-md duration-200 hover:scale-105'
                                />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}


export default Portfolio
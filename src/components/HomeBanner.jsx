import React from 'react';
import image from '../assets//All Images/P3OLGJ1 copy 1.png'

const HomeBanner = () => {
    return (
        <div className=' lg:flex md:px-24 lg:px-8 px-4 py-5 mx-auto  gap-10 justify-center items-center mt-7'>
            <div>
                <h2 className='text-6xl font-bold leading-[5rem]'>Take One Step <br /> Farther To Your <br /> <span className='text-blue-400'>Dream Job</span> </h2>
                <p className='my-6 text-gray-500 text-xl'>You have the opportunity to explore <br /> many job in our web site. Come to us and   we will give a <br /> solution to find your perfect job.</p>
                <button className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded-md px-4 py-2 text-white font-semibold">Get Started</button>
            </div>
            <div className=''>
                {
                    <img src={image} width={500} height={600} alt="" />
                }
            </div>
        </div>
    );
};

export default HomeBanner;
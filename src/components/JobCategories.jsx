import React from 'react';

const JobCategories = ({ category }) => {
    
    const { name, logo, jobsAvailable } = category;

    return (
        <div className=' border-indigo-600 p-5 bg-violet-50'>
            <img src={logo} alt="" className='w-16 rounded h-16' />
            <h5 className='mt-2 font-bold '>{name}</h5>
            <p className='mt-1 text-gray-500'>{jobsAvailable}</p>
        </div>
    );
};

export default JobCategories;
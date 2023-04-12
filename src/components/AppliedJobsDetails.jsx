import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({ applyjob }) => {
    

    const {
        fulltimeOrParttime,
        remoteOrOnsite,
        companyLogo,
        companyName,
        id,
        location,
        salary,
        jobTitle,
    } = applyjob;

    return (
        <div className=' mx-4 lg:mx-10'>
            <div className='flex flex-col lg:flex-row justify-center items-center rounded lg:justify-between bg-gray-100 mt-5 p-8 shadow-md'>
                <div className='flex flex-col lg:flex-row lg:text-start text-center items-center gap-5'>
                    <div className='bg-gray-200 rounded-md w-56 h-56 flex items-center justify-center'>
                        <img src={companyLogo} className='w-32 h-32' alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold my-2'>{jobTitle}</h1>
                        <p className='text-gray-500 text-xl mb-5'>{companyName}</p>
                        <div className='flex gap-5 mb-5 lg:justify-start justify-center'>
                            <button className="btn bg-transparent text-indigo-600 hover:bg-transparent border border-teal-500">{remoteOrOnsite}</button>
                            <button className="btn bg-transparent text-indigo-600 hover:bg-transparent border border-teal-500">{fulltimeOrParttime}</button>
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center md:gap-5'>
                            <div className='flex gap-1'>
                                <span><MapPinIcon className="h-6 w-6 text-gray-500" /></span>
                                {location}
                            </div>
                            <div className='flex gap-1'>
                                <span><CurrencyDollarIcon className="h-6 w-6 text-gray-500" /></span>
                                {salary}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 lg:mt-0'>
                    <Link to={`/jobs/${id}`}>
                        <button className=" w-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-md px-4 py-3 text-white font-bold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default AppliedJobsDetails;



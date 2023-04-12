import React from 'react';
import { MapPinIcon , CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeatureJob = ({ feature }) => {

    const { companyLogo, companyName, jobTitle, remoteOrOnsite, fulltimeOrParttime, location, salary, id } = feature;

    // console.log(feature)
    return (
        <div className='border border-neutral-300 rounded p-4'>
            <div>
                <img src={companyLogo} className='w-32 h-24 my-3' alt="" />
            </div>
            <h1 className='text-2xl font-semibold my-2'>{jobTitle}</h1>
            <p className='text-gray-500 text-xl mb-5'>{companyName}</p>
            <div className='flex gap-5  mb-5'>
                <button className="btn bg-transparent text-indigo-600 hover:bg-transparent border border-teal-500">{remoteOrOnsite}</button>
                <button className="btn bg-transparent text-indigo-600 hover:bg-transparent border border-teal-500">{fulltimeOrParttime}</button>
            </div>
            <div className='flex items-center gap-5 mb-5'>
                <div className='flex gap-1'>
                    <span><MapPinIcon className="h-6 w-6 text-gray-500" /></span>
                    {location}
                </div>
                <div className='flex gap-1'>
                    <span><CurrencyDollarIcon className="h-6 w-6 text-gray-500" /></span>
                    {salary}
                </div>
            </div>
            <Link to={`/jobs/${id}`} ><button className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded-md px-4 py-2 text-white font-semibold">View Details</button></Link>
        </div>
    );
};

export default FeatureJob;


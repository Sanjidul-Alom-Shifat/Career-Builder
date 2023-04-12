import React, { useEffect, useState } from 'react';
import AppliedJobsDetails from './AppliedJobsDetails';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    
    const [filter, setFilter] = useState(null); 

    const appliedJobs = useLoaderData();

    const filteredJobs = filter
        ? appliedJobs.filter((job) => job.remoteOrOnsite.toLowerCase() === filter)
        : appliedJobs; 
    
        

    return (
        <div className='mb-14'>
            <h1 className="text-center my-20 text-5xl font-bold ">Applied Jobs</h1>

            <div className='mx-4 lg:mx-10 text-right'>
                <div className="dropdown dropdown-left">
                    <label tabIndex={0} className="btn m-1 gap-1">Filter By <ChevronDownIcon className="h-6 w-6" /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-52">
                        <li><a onClick={() => setFilter('remote')}>REMOTE</a></li>
                        <li><a onClick={() => setFilter('onsite')}>ONSITE</a></li>
                    </ul>
                </div>
            </div>

            {
                filteredJobs.map((appliedJob) =>
                    <AppliedJobsDetails
                        key={appliedJob.id}
                        applyjob={appliedJob}
                    />
                )
            }

        </div>
    );
};

export default AppliedJobs;

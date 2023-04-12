import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { PhoneIcon, CurrencyDollarIcon, MapPinIcon, EnvelopeIcon, CalendarIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../Utilities/FakeDB';


const JobDetailsPage = () => {

    const JobDetails = useLoaderData();
    const { id } = useParams();

    const handleAppliedJob = (id) =>{
        addToDb(id);
    }

    const [jobInformation, setJobInformation] = useState({});
    useEffect(() => {
        const jobData = JobDetails && JobDetails.find((job) => job.id == (id));
        setJobInformation(jobData);
    }, [id]);
    // console.log(jobInformation)

    

    const {
        jobDescription,
        jobResponsibility,
        educationalRequirements,
        experiences,
        phone,
        email,
        location,
        salary,
        jobTitle,
    } = jobInformation;



    return (

        <div className='mb-20'>
            <h1 className="text-center my-20 text-5xl font-bold ">Job Details </h1>
            <div className="lg:flex items-start justify-around gap-10 my-container">
                <div className="lg:w-7/12 w-full">
                    <div className="mb-7">
                        <span className="text-lg font-bold">Job Description : </span>
                        <span>{jobDescription}</span>
                    </div>
                    <div className="mb-7">
                        <span className="text-lg font-bold">Job Responsibility: </span>
                        <span>{jobResponsibility}</span>
                    </div>
                    <div>
                        <span className="text-lg font-bold">Educational Requirements: </span>
                        <p className="mt-7">{educationalRequirements}</p>
                    </div>
                    <div className="mt-7">
                        <span className="text-lg font-bold">Experiences: </span>
                        <p className="my-5">{experiences}</p>
                    </div>
                </div>
                <div className='lg:w-5/12 w-full'>
                    <div className="bg-indigo-100 p-10 bg-opacity-50  rounded">
                        <div>
                            <h3 className="text-xl font-bold border-b-2  border-opacity-30 pb-4 border-gray-500">Job Details :</h3>
                            <div className="my-6">
                                <div className="flex gap-2">
                                    <CurrencyDollarIcon className="h-6 w-6 mb-3 text-indigo-500" />
                                    <p>Salary : {salary}</p>
                                </div>
                                <div className="flex gap-2">
                                    <CalendarIcon className="h-6 w-6 text-indigo-500" />
                                    <p>Job Title : {jobTitle} </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className="text-xl font-bold border-b-2  border-opacity-30 pb-4 border-gray-500">Contact Information : </h3>
                                <div className="mt-6 flex flex-col gap-6">
                                    <div className="flex gap-2">
                                        <PhoneIcon className="h-6 w-6 text-indigo-500" />
                                        <p>Phone :  {phone}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <EnvelopeIcon className="h-6 w-6 text-indigo-500" />
                                        <p>Email : {email} </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <MapPinIcon className="h-6 w-6 text-indigo-500" />
                                        <p>Address : {location} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <Link to='/appliedjobs'>
                            <button onClick={() => handleAppliedJob(id)} className=" w-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-md px-4 py-3 text-white font-bold">
                                Apply Now
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default JobDetailsPage;


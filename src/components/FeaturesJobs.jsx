import React, { useEffect, useState } from 'react';
import FeatureJob from './FeatureJob';

const FeaturesJobs = () => {

    const [features, setFeatures] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);

    useEffect(() => {
        fetch("/jobdetails.json")
            .then(response => response.json())
            .then(data => {
                if (showAllJobs) {
                    setFeatures(data);
                } else {
                    setFeatures(data.slice(0, 4));
                }
            })
            .catch(error => console.error(error));
    }, [showAllJobs]);

    return (
        <div className='px-4 mt-11'>
            <h2 className='text-center text-3xl font-bold mx-5'>Featured Jobs</h2>
            <p className='text-center font-semibold text-gray-500 mt-3 mx-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 my-container  mt-6'>
                {
                    features.map((feature) =>
                        <FeatureJob
                            key={feature.id}
                            feature={feature}
                        >
                        </FeatureJob>
                    )
                }
            </div>

            <div className='text-center mt-8'>
                <button onClick={() => setShowAllJobs(true)} className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded-md px-4 py-2 text-white font-semibold">See All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturesJobs;
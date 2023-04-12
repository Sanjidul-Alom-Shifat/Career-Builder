import React from 'react';
import JobCategory from './JobCategory';
import HomeBanner from './HomeBanner';
import FeaturesJobs from './FeaturesJobs';

const HomePage = () => {
    return (
        <div className='mb-14'>
            
            <HomeBanner></HomeBanner>

            <JobCategory></JobCategory>
            
            <FeaturesJobs></FeaturesJobs>

        </div>
    );
};

export default HomePage;
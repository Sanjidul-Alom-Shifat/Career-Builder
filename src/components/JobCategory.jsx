import React, { useEffect, useState } from 'react';
import JobCategories from './JobCategories';

const JobCategory = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("/jobcategory.json")
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='px-4 mt-10'>
            <h2 className='text-center text-3xl font-bold mx-5'>Job Category List</h2>
            <p className='text-center font-semibold text-gray-500 mt-3 mx-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-8 mt-7'>
                {
                    categories.map((category) => 
                        <JobCategories
                            key={category.id}
                            category={category}
                        >
                        </JobCategories>
                    )
                }
            </div>
        </div>
    );
};

export default JobCategory;
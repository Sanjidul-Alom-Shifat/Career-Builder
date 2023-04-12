import { getShoppingCart } from "../Utilities/FakeDB";


const JobLoader = async () => {
    const JobDetails = await fetch('/jobdetails.json');
    const Jobs = await JobDetails.json();
    // console.log(Jobs);
    const StoredJobDetails = getShoppingCart();
    // console.log(StoredJobDetails);
    let SavedJob = [];
    // console.log(SavedJob)
    for (const id in StoredJobDetails) {
        const AddedJob = Jobs.find((Job) => Job.id == id);
        if (AddedJob) {
            const quantity = StoredJobDetails[id];
            AddedJob.quantity = quantity;
            SavedJob.push(AddedJob);
        }
    }
    
    return SavedJob;
}

export default JobLoader;
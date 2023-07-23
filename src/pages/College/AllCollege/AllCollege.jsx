import { useEffect, useState } from "react";
import AllCollegeDisplay from "./AllCollegeDisplay";


const AllCollege = () => {
    const [colleges, setColleges] = useState([]);
    useEffect( () => {
        fetch('https://college-services-server.vercel.app/college')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    return (
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-24">
            {
                colleges.map(college => <AllCollegeDisplay
                key={college._id}
                college={college}>
                </AllCollegeDisplay>)
            }
        </div>
    );
};

export default AllCollege;
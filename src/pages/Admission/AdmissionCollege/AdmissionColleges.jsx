import { useEffect, useState } from "react";
import AdmissionCollegeDisplay from "./AdmissionCollegeDisplay";


const AdmissionColleges = () => {
    const [college, setCollege] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/college')
        .then(res => res.json())
        .then(data => setCollege(data))
    },[])
    return (
        <div className="mb-16 md:mb-24">
            <div className="w-8/12 md:w-4/12 text-center mx-auto pt-28 pb-12">
             <p className="text-yellow-600 pb-2 italic">--- Chooice Your Favourite College ---</p>
             <h3 className="text-3xl uppercase border-y-4 py-3">Click Your College</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0">
                {
                    college.map(college => <AdmissionCollegeDisplay
                    key={college._id}
                    college={college}>
                    </AdmissionCollegeDisplay>)
                }
            </div>
        </div>
    );
};

export default AdmissionColleges;
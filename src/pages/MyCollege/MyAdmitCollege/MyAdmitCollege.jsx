import { useContext, useEffect, useState } from "react";
import MyAdmitCollegeDisplay from "./MyAdmitCollegeDisplay";
import { UserContext } from "../../../providers/AuthProvider";


const MyAdmitCollege = () => {
    const { user } = useContext(UserContext);
    const [mycolleges, setMyCollege] = useState([]);
    useEffect(() => {
        fetch(`https://college-services-server.vercel.app/mycollege?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyCollege(data))
    },[user])
    return (
        <div>
            <div className="w-8/12 md:w-4/12  text-center mx-auto pt-28">
            <p className="text-yellow-600 pb-2 italic">--- Look At My favourite College ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-3">college Information</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 pt-12 pb-16 md:pb-24 px-4 md:px-0">
            {
                mycolleges.map(myCollege => <MyAdmitCollegeDisplay
                key={myCollege._id}
                myCollege={myCollege}></MyAdmitCollegeDisplay>)
            }
        </div>
        </div>
    );
};

export default MyAdmitCollege;
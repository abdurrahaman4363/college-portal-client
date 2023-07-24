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
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 pt-28 pb-16 md:pb-24">
            {
                mycolleges.map(myCollege => <MyAdmitCollegeDisplay
                key={myCollege._id}
                myCollege={myCollege}></MyAdmitCollegeDisplay>)
            }
        </div>
    );
};

export default MyAdmitCollege;
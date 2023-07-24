import { useContext } from "react";
import { UserContext } from "../../../providers/AuthProvider";


const UserDetails = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="py-24">
            <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={user?.photoURL}
          style={{ height: "400px", width: '100%' }}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
      <h2 className="card-title"><span className="font-bold">Name: </span>{user?.displayName}</h2>
      <p><span className="font-bold">Email:</span> {user?.email}</p>
      <p><span className="font-bold">Id:</span> {user?.uid}</p>
      <p><span className="font-bold">Email Verified:</span> {user?.emailVerified}</p>
      <p><span className="font-bold">Phone Number: </span> {user?.phoneNumber
}</p>
      
        <div className="card-actions">
        </div>
      </div>
    </div>
        </div>
    );
};

export default UserDetails;
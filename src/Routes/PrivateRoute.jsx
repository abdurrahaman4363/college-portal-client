import { useContext } from "react";
import { UserContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(UserContext);
    if(loading){
       return <progress className="progress text-teal-500 w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
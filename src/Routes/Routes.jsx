import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import College from "../pages/College/College/College";
import Admission from "../pages/Admission/Admission/Admission";
import AdmissionForm from "../pages/Admission/AdmissionForm/AdmissionForm";
import Error from "../pages/Error/Error";
import CollegeDetails from "../pages/Home/CollegeDetails/CollegeDetails";
import CollegeFacility from "../pages/College/CollegeFacility/CollegeFacility";
import MyCollege from "../pages/MyCollege/MyCollege/MyCollege";
import PrivateRoute from "./PrivateRoute";
import UserDetails from "../pages/Home/UserDetails/UserDetails";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/college',
          element: <College></College>
        },
        {
          path: '/collegedetails/:id',
          element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
          loader: ({params})=>fetch(`https://college-services-server.vercel.app/college/${params.id}`)
        },
        {
          path: '/collegefacility/:id',
          element: <PrivateRoute><CollegeFacility></CollegeFacility></PrivateRoute>,
          loader: ({params})=>fetch(`https://college-services-server.vercel.app/college/${params.id}`)
        },
        {
          path: '/admission',
          element: <Admission></Admission>,
        },
        {
          path: '/admissionform/:id',
          element: <AdmissionForm></AdmissionForm>,
          loader: ({params})=>fetch(`https://college-services-server.vercel.app/college/${params.id}`)
        },
        {
          path: '/mycollege',
          element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
        },
        {
          path: '/userdetails',
          element: <UserDetails></UserDetails>
        }
      ]
    },
    {
      path: '/*',
      element: <Error></Error>
    }
  ]);
export default router;
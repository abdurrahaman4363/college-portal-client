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
          element: <CollegeDetails></CollegeDetails>,
          loader: ({params})=>fetch(`https://college-services-server.vercel.app/college/${params.id}`)
        },
        {
          path: '/collegefacility/:id',
          element: <CollegeFacility></CollegeFacility>,
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
          element: <MyCollege></MyCollege>
        }
      ]
    },
    {
      path: '/*',
      element: <Error></Error>
    }
  ]);
export default router;
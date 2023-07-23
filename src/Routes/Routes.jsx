import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import College from "../pages/College/College/College";
import Admission from "../pages/Admission/Admission/Admission";

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
          path: '/admission',
          element: <Admission></Admission>
        }
      ]
    },
  ]);
export default router;
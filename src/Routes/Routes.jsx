import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import AllColleges from "../Pages/AllColleges/AllColleges";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/AdmissionForm/AdmissionForm";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/EditProfile/EditProfile";
import MyCollege from "../Pages/MyCollege/MyCollege";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: ([
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/details/:id",
                element: <CollegeDetails></CollegeDetails>
            },
            {
                path: "/colleges",
                element: <AllColleges></AllColleges>
            },
            {
                path: "/admission",
                element: <Admission></Admission>
            },
            {
                path: "/admission_form/:id",
                element: <AdmissionForm></AdmissionForm>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/edit_profile",
                element: <EditProfile></EditProfile>
            },
            {
                path: "/my_college",
                element: <MyCollege></MyCollege>
            }
        ])
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    }
]);
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './Pages/Home/Home/Home';
import CollegeDetails from './Pages/CollegeDetails/CollegeDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AllColleges from './Pages/AllColleges/AllColleges';
import Admission from './Pages/Admission/Admission';
import AdmissionForm from './Pages/AdmissionForm/AdmissionForm';

const queryClient = new QueryClient()

const router = createBrowserRouter([
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
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)

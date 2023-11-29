import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home.jsx';
import Root from './Layout/Root.jsx';
import ErrorPage from './Page/ErrorPage.jsx';
import Login from './Page/Login/Register/Login.jsx';
import Register from './Page/Login/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import Admin from './Layout/Admin.jsx';
import Donar from './Page/Admin/Donar.jsx';
import AllUsersPage from './Page/Admin/AllUsersPage.jsx';
import DonationRequestPage from './Page/Admin/DonationRequestPage.jsx';
import ContentManagement from './Page/Admin/ContentManagement.jsx';
import Volunteer from './Layout/Volunteer.jsx';
import VolunteerHome from './Page/Volunteer/VolunteerHome.jsx';
import AllDonationRequest from './Page/Volunteer/AllDonationRequest.jsx';
import ContentManagementPage from './Page/Volunteer/ContentManagementPage.jsx';
import DonarDashboard from './Layout/DonarDashboard.jsx';
import DonarDashboardHome from './Page/Donar/DonarDashboardHome.jsx';
import MyDonationRequests from './Page/Donar/MyDonationRequests.jsx';
import CreateDonationRequest from './Page/Donar/CreateDonationRequest.jsx';
import EditButton from './Page/Donar/EditButton.jsx';
import AddBlog from './Page/Admin/AddBlog.jsx';
import BloodDonationDetails from './Page/BloodDonationDetails.jsx';
import BlogPage from './Page/BlogPage.jsx';
import('preline');

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import DonarService from './Page/DonarService.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blooddonationdetails",
        element: <PrivateRoute><BloodDonationDetails></BloodDonationDetails></PrivateRoute>,
      },
      {
        path: "/blogpage",
        element: <PrivateRoute><BlogPage></BlogPage></PrivateRoute>,
      },
      {
        path: "/donarservice",
        element: <PrivateRoute><DonarService></DonarService></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },

  // Admin

  {
    path: "admin",
    element: <PrivateRoute><Admin></Admin></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "donar",
        element: <Donar></Donar>,
      },
      {
        path: "alluserspage",
        element: <AllUsersPage></AllUsersPage>,
      },
      {
        path: "donationrequestpage",
        element: <DonationRequestPage></DonationRequestPage>,
      },
      {
        path: "contentmanagement",
        element: <ContentManagement></ContentManagement>,
      },
      {
        path: "addblog",
        element: <AddBlog></AddBlog>,
      },

    ],
  },

  // Volunteer

  {
    path: "volunteer",
    element: <PrivateRoute><Volunteer></Volunteer></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "volunteerhome",
        element: <VolunteerHome></VolunteerHome>,
      },
      {
        path: "alldonationrequest",
        element: <AllDonationRequest></AllDonationRequest>,
      },
      {
        path: "contentmanagementpage",
        element: <ContentManagementPage></ContentManagementPage>,
      },

    ],
  },

  // Dashboard

  {
    path: "donardashboard",
    element: <PrivateRoute><DonarDashboard></DonarDashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "donardashboardhome",
        element: <DonarDashboardHome></DonarDashboardHome>,
      },
      {
        path: "mydonationrequests",
        element: <MyDonationRequests></MyDonationRequests>,
      },
      {
        path: "createdonationrequest",
        element: <CreateDonationRequest></CreateDonationRequest>,
      },
      {
        path: "editbutton",
        element: <EditButton></EditButton>,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
    <Toaster />
  </React.StrictMode>,
)

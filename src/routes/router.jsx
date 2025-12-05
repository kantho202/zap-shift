import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Service from "../pages/Service/Service";
import Pricing from "../pages/Pricing/Pricing";
import Blog from "../pages/Blog/Blog";
import Content from "../pages/Content/Content";
import Error from "../pages/Error/Error";
import AuthLayout from "../layout/AuthLayout";
import LogIn from "../pages/Auth/LogIn";
import Register from "../pages/Auth/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRouter from "./PrivateRouter";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import AddParcel from "../pages/AddParcel/AddParcel";
import DashBoardLayout from "../layout/DashBoardLayout";
import Payment from "../pages/DashBoard/Payment/Payment";
import MyParcel from "../pages/DashBoard/MyParcel/MyParcel";
import PaymentSuccess from "../pages/DashBoard/Payment/PaymentSuccess";
import PaymentCancel from "../pages/DashBoard/Payment/PaymentCancel";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/DashBoard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/DashBoard/UsersManagement/UsersMangement";
import AdminRouter from "./AdminRouter";
import AssignRiders from "../pages/DashBoard/AssignRiders/AssignRiders";
import RiderRouter from "./RiderRouter";
import AssignDeliveries from "../pages/DashBoard/AssignDeliveries/AssignDeliveries";
import CompletedDeliveries from "../pages/DashBoard/CompletedDeliveries/CompeletedDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";
import DashboardHome from "../pages/DashBoard/DashboardHome/DashboardHome";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/service",
                element: <Service></Service>
            },
            {
                path: "/coverage",
                loader: () => fetch('/serviceCenter.json').then(res => res.json()),
                element: <Coverage></Coverage>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/pricing",
                element: <Pricing></Pricing>
            },
            {
                path: "/add-parcel",
                loader: () => fetch('/serviceCenter.json').then(res => res.json()),
                element: <PrivateRouter>
                    <AddParcel></AddParcel>
                </PrivateRouter>,
            },
            {
                path: "/rider",
                loader: () => fetch('/serviceCenter.json').then(res => res.json()),
                element: <PrivateRouter>
                    <Rider></Rider>
                </PrivateRouter>
            },
            {
                path:'/parcel-track/:trackingId',
                Component:ParcelTrack

            },
            // {
            //     path: "/blog",
            //     element: <Blog></Blog>
            // },
            // {
            //     path: "/content",
            //     element: <Content></Content>
            // },
            {
                path: "*",
                element: <Error></Error>
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                Component: LogIn
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'forget-password',
                Component: ForgetPassword
            },

        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRouter>
             <DashBoardLayout></DashBoardLayout>
        </PrivateRouter> ,
        children: [
            {
                index:true,
                Component:DashboardHome
            },
            {
                path: 'my-parcels',
                Component:MyParcel
            },
            {
                path:'payment-history',
                Component:PaymentHistory
            },
            // rider only routes
            {
                path:'assign-deliveries',
                element:<RiderRouter><AssignDeliveries></AssignDeliveries></RiderRouter>
            },
            {
                path:'completed-deliveries',
                element:<RiderRouter><CompletedDeliveries></CompletedDeliveries></RiderRouter>
            },
            // admin only routes
            {
                path:'approveRiders',
                // Component:ApproveRiders
                element:<AdminRouter><ApproveRiders></ApproveRiders></AdminRouter>
            },
            {
                path:'assignRiders',
                // Component:ApproveRiders
                element:<AdminRouter><AssignRiders></AssignRiders> </AdminRouter>
            },
            {
                path:'users-management',
                // Component:UsersManagement
                element:<AdminRouter><UsersManagement></UsersManagement></AdminRouter>
            },
            {
                path:'payment/:parcelId',
                Component:Payment
            },
            {
                path:'payment-success',
                Component:PaymentSuccess
            },
            {
                path:'payment-canceled',
                Component:PaymentCancel
            },
        
        ]

    }
    

]);
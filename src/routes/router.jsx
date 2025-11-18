import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/coverage",
                loader:()=>fetch('/public/serviceCenter.json').then(res=>res.json()),
                element:<Coverage></Coverage>
            }
        ]
    },
]);
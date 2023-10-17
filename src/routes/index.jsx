import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Suspense } from "react";

import Home from "../views/Home";
import Detail from "../views/Detail";
import Error404 from "../views/Error404";
import ErrorBoundary from '../components/ErrorBoundary';
import Profile from "../views/Profile";
import { Children } from "react";
import LikedEvents from "../views/Profile/components/LikedEvents";
import MyInfo from "../views/Profile/components/MyInfo";


const router = createBrowserRouter([   
    {
        path: '/',
        element: <Home/>,
        errorElement: < Error404/>
    },
    {
        path: '/detail/:eventId',
        element: (
            <Suspense fallback={<div>CargandO </div>}>
                 <ErrorBoundary fallback={ <div> Ha ocurrido un error al obtener el detalle </div>}/>
                <Detail/>
            </Suspense>
        )
    },
    {
        path: '/profile',
        element: <Profile/>,
        children: [
            { 
                path:'my-info',
                element: <MyInfo/>,

            }, { 
                path:'liked-events',
                element: <LikedEvents/>,

            }
    
         ],
    }
]);


const MyRoutes = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default MyRoutes;
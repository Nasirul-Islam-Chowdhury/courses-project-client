import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/erroPage/ErrorPage";
import Signin from '../Pages/signin/Signin'
import Register from '../Pages/Register/Register'
import Blog from '../Pages/Blog/Blog'
import Courses from '../Pages/Courses/Courses'
import CourseDetails from "../Pages/courseDetails/CourseDetails";
import Details from "../Layout/Details";
import FilteredCategory from "../Pages/FilteredCategory/FilteredCategory";
import FilteredDuration from "../Pages/FilteredDuration/FilteredDuration";
import User from '../../Components/Pages/Profile/User'
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute'
import Checkout from "../Pages/checkout/Checkout";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            
            {
                path: '/',
                element: <Details />,
                children: [
                    {
                        path: '/',
                        element: <Courses />,
                        loader: () => fetch("https://courses-project-server-nicchy123.vercel.app/courses")
                    },
                    {
                        path: '/details/:id/:level',
                        element: <FilteredCategory/>,
                        loader: ({ params }) => fetch(`https://courses-project-server-nicchy123.vercel.app/category/${params.level}`)
                    },
                    {
                        path: '/details/:id/abc/:duration',
                        element: <FilteredDuration/>,
                        loader: ({ params }) => fetch(`https://courses-project-server-nicchy123.vercel.app/category/level/${params.duration}`)
                    }
                
                ]
            },
            {
                path: '/details/:id',
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`https://courses-project-server-nicchy123.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://courses-project-server-nicchy123.vercel.app/courses/${params.id}`),
                element: <PrivateRoute><Checkout /></PrivateRoute>
               
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/profile',
                element: <User />
            }
        ]

    }
])
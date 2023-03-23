import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/erroPage/ErrorPage";
import Signin from '../Pages/signin/Signin'
import Register from '../Pages/Register/Register'
import Blog from '../Pages/Blog/Blog'
import FAQ from '../Pages/FAQ/FAQ'
import Courses from '../Pages/Courses/Courses'
import CourseDetails from "../Pages/courseDetails/CourseDetails";
import Details from "../Layout/Details";
import FilteredCategory from "../Pages/FilteredCategory/FilteredCategory";
import Category from "../Pages/Category/Category";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Courses />,
                loader: () => fetch("https://courses-project-server-nicchy123.vercel.app/courses")
            },
            {
                path: '/details/:id',
                element: <Details />,
                children: [
                    {
                        path: '/details/:id',
                        element: <CourseDetails />,
                        loader: ({ params }) => fetch(`https://courses-project-server-nicchy123.vercel.app/courses/${params.id}`)
                    },
                    {
                        path: '/details/:id/:level',
                        element: <FilteredCategory/>,
                        loader: ({ params }) => fetch(`https://courses-project-server-nicchy123.vercel.app/category/${params.level}`)
                    },
                
                ]
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
                path: '/faq',
                element: <FAQ />
            }
        ]

    }
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/erroPage/ErrorPage";
import Signin from '../Pages/signin/Signin'
import Register from '../Pages/Register/Register'
import Blog from '../Pages/Blog/Blog'
import FAQ from '../Pages/FAQ/FAQ'
import Courses from '../Pages/Courses/Courses'

export const Router = createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                element: <Courses/>
              },
            {
                path: '/signin',
                element: <Signin/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/faq',
                element: <FAQ/>
            }
    ]

    }
])
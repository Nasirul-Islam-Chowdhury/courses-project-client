import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/erroPage/ErrorPage";

export const Router = createBrowserRouter([
    {
        path:"/",
        errorElement: <ErrorPage/>,
        element: <Main/>

    }
])
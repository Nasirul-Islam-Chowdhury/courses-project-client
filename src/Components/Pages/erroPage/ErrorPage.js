import React from 'react';
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex flex-col gap-5 min-h-screen justify-center items-center'>
          <h1 className='text-7xl text-red-600'>oops!</h1>
          <p className='text-2xl'>Sorry, an unexpected error has occurred.</p>
          <p className='text-red-600 text-2xl'>
            <i>{error.statusText || error.message}</i>
          </p>
          <p>Back to <Link to="/" className='underline text-green-500'>Home</Link></p>
          
        </div >
      );
};

export default ErrorPage;
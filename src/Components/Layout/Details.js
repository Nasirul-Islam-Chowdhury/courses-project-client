import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../Pages/Category/Category';

const Details = () => {
    return (
       <div className="flex">
        <div className="w-1/4 bg-slate-100">
            <Category/>
        </div>
         <div className="w-3/4">
            <Outlet/>
        </div>
       </div>
    );
};

export default Details;
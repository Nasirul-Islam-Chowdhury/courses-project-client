import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../Pages/Category/Category';
import Duration from '../Pages/Duraion/Duration';

const Home = () => {
    return (
        <div className="flex">
        <div className="w-1/4 bg-slate-100">
            <Category/>
            <Duration/>
        </div>
         <div className="w-3/4">
            <Outlet/>
        </div>
       </div>
    );
};

export default Home;
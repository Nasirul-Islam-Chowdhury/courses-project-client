import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Category from "../Pages/Category/Category";
import Duration from "../Pages/Duraion/Duration";

const Details = () => {
    const location = useLocation();
    console.log(location)
  return (
  
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    
      <div className="drawer-content ">
{location.pathname == "/" && <div className="flex justify-end">

<label
          htmlFor="my-drawer-2"
          className="btn btn-sm text-white  text-end w-30 bg-emerald-600 drawer-button lg:hidden "
        >
          see categories
        </label>
</div>}
  
      <Outlet/>
      
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <Category />
          <Duration />
        </ul>
      </div>
    </div>
  );
};

export default Details;

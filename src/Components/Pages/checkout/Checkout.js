import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    return (
       <div className='min-h-[700px] flex justify-center items-center'>
         <div className="bg-slate-100 rounded-md p-8 lg:w-2/5 md:w-4/6 mx-auto ">
        <div className="h-full  rounded-lg overflow-hidden">
          <img className="w-full h-80 mx-auto" src={course.image} alt="blog"/>
          <div className="mt-3">
            <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">{course.title}</h1>
            <p className="leading-relaxed mb-3">{course.description}</p>
            <div className='flex justify-start gap-10'>
            
            </div>
            <Link className='mt-2'>
              <button onClick={()=>toast.error("Not Available Now")} className='px-6 py-2 bg-green-600 font-custom text-2xl text-white w-full'>Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Checkout;
import React,{useRef} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactPrint from 'react-to-print'

const CourseDetails = () => {
  const ref = useRef();
    const course = useLoaderData();
    return (
       <div>
        <div className='flex justify-end'>
        <ReactPrint trigger={()=> <button className="px-6 py-2 rounded mt-2 bg-slate-800 text-white">Generate pdf</button>} content={()=>ref.current}/>

        </div>
         <div ref={ref} className="p-4 md:w-4/6 mx-auto">
        <div className="h-full  rounded-lg overflow-hidden">
          <img className="w-full mx-auto h-[350px]" src={course.image} alt="blog"/>
          <div className="mt-3">
            <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">{course.title}</h1>
            <p className="leading-relaxed mb-3">{course.description}</p>
            <div className='flex justify-start gap-10'>
            <h1 className="title-font text-xl font-medium mb-3">Course Level : <span className='font-bold font-custom text-gray-900'>{course.level}</span></h1>
            <h1 className="title-font text-xl font-medium mb-3">Course Duration : <span className='font-bold font-custom text-gray-900'>{course.duration} Weeks</span></h1>
            </div>
            <h1 className="title-font text-xl font-medium mb-3">Course Price : $<span className='font-bold font-custom text-gray-900'>{course.price}</span></h1>
            <div className="flex items-center flex-wrap ">
              <span className="text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-800 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
            <Link to={`/checkout/${course.id}`} className='mt-2'>
              <button className='px-6 py-2 bg-red-600 font-custom text-2xl text-white w-full'>Get Premium Access</button>
            </Link>
          </div>
        </div>
      </div>
       </div>
    );
};
export default CourseDetails;
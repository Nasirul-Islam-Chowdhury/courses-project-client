import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    return (
        <div className="p-4 h-full">
        <div className="h-full relative border-2 bg-white font-custom border-gray-200 border-opacity-60  rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={course.image} alt="blog"/>
          <div className="p-6 mb-5">
            <h1 className="title-font text-lg font-bold mb-3">{course.title}</h1>
            <p className="leading-relaxed mb-3">{course.description}</p>
           
          </div>
          <Link to={`/courses/${course.id}`} className="flex justify-center w-full bg-slate-700 mt-2 items-center hover:bg-slate-900  absolute bottom-0">
              <div  className=" py-2  mx-auto text-white font-semibold items-center md:mb-2 lg:mb-0">See Details 
              </div>
            </Link>
        </div>
       
      </div>
    );
};

export default Course;
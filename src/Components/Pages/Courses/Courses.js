import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 md:p-3 md:px-5 '>
            {
                courses.map(course => <Course key={course.id} course={course}/>)
            }
        </div>
    );
};

export default Courses;
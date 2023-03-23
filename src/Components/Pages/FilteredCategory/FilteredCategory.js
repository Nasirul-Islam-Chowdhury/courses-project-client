import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const FilteredCategory = () => {
    const data = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 p-3 md:px-10'>
        {
            data.map(course => <Course key={course.id} course={course}/>)
        }
    </div>
    );
};

export default FilteredCategory;
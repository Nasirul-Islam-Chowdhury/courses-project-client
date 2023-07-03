import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Category = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    
   useEffect(()=>{
    fetch("https://courses-project-server-nicchy123.vercel.app/category")
    .then(r=>r.json())
    .then(r=>{
        setLoading(false)
        setData(r)
    });
   },[])
   if(loading){
    return <div>loading</div>
   }
    return (
        <div className='mt-3 px-2 md:px-8 '>
            <h1 className="md:text-xl text-lg font-custom font-semibold italic">Course level</h1>
            <div className='py-5  md:ml-3'>
                <div className='md:text-xl text-sm flex flex-col'>
                    {
                        data.map(category => 
                            <NavLink to={`/details/:id/${category.level}`} key={category.id}className='p-3 hover:bg-white cursor-pointer'>{category.level} level courses</NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
export default Category;
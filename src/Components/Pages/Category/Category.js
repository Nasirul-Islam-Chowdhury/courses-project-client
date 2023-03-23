import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

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
        <div className='mt-3 px-8 min-h-screen'>
            <h1 className=" text-xl font-custom font-semibold italic">Course level</h1>
            <div className='py-5  ml-3'>
                <div className='text-xl flex flex-col'>
                    {
                        data.map(c => 
                            <Link to={`/details/:id/${c.level}`} key={c.id}className='p-3 hover:bg-white cursor-pointer'>{c.level} level courses</Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
export default Category;
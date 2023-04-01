import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Duration = () => {
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
            <h1 className=" md:text-xl text-lg font-custom font-semibold italic">Course duration</h1>
            <div className='py-5  md:ml-3'>
                <div className='md:text-xl text-sm flex flex-col'>
                    {
                        data.map(c => 
                            <NavLink to={`/details/:id/abc/${c.duration}`} key={c.id}className='p-3 hover:bg-white cursor-pointer'>{c.duration} weeks</NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
export default Duration;
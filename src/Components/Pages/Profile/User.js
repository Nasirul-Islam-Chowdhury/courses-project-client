import React,{useContext} from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const User = () => {
    const { user } = useContext(AuthContext);
   
    return (
 <div>
   <div className=''>
   <img className='md:w-1/5 h-[200px] rounded mx-auto mt-2' src={user.photoURL} alt="" />
   </div>
   <form className="mt-6 px-2 md:w-3/5 mx-auto">
                    <div className="mb-2">
                        <label
                            type="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Your Name
                        </label>
                        <input
                           readOnly
                           placeholder={user?.displayName}
                            name="email"
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            type="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            readOnly
                            placeholder={user?.email}
                            name="email"
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            type="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Photourl
                        </label>
                        <input
                            readOnly
                            placeholder={user?.photoURL}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                   
                   
                </form>
 </div>
    );
};

export default User;
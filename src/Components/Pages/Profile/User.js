import React,{useState, useContext} from 'react';
import { useHref } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const User = () => {
    const { user } = useContext(AuthContext);
   
    return (
 <div>
    {user?.email}
 </div>
    );
};

export default User;
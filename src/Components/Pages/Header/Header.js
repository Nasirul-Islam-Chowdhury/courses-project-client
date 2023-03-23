import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import logo from "../../../assets/imges/logo.png"
import {
    FaQuestionCircle,
    FaBloggerB,
    FaExpandArrowsAlt,
    FaAlignJustify
} from 'react-icons/fa';
import { GiArchiveRegister } from 'react-icons/gi';
import { GoSignIn } from 'react-icons/go';
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const { info } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    return (
        <div className="flex font-custom justify-between items-center h-[100px] bg-slate-800 text-white px-10 md:px-32">
            <div className='flex justify-start items-center gap-2'>
                <img src={logo} className="md:w-[80px] w-10" alt="" />
                <Link to="/" className="md:text-3xl text-xl font-bold">Learning Point</Link>
            </div>
            <ul className={`md:flex gap-8 text-xl bg-slate-800 md:static absolute ${open ? 'top-16' : 'top-[-200px]'}`}>
                <NavLink activeClassName="active" activeStyle={{color: "red"}} to="/" className="flex items-center gap-2">
                    <li>Courses</li>
                </NavLink>
                <NavLink to="/faq" className="flex items-center gap-2">
                    <FaQuestionCircle />
                    <li>FAQ</li>
                </NavLink>
                <NavLink to="/blog" className="flex items-center gap-2">
                    <FaBloggerB />
                    <li>Blog</li>
                </NavLink>
                <NavLink to="/register" className="flex items-center gap-2">
                    <GiArchiveRegister />
                    <li>Register</li>
                </NavLink>
                <NavLink to="/signin" className="flex items-center gap-2">
                    <GoSignIn />
                    <li>Signin</li>
                </NavLink>
            </ul>
            <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer">
                {
                    open ? <FaExpandArrowsAlt className="text-white h-6 w-6" /> : <FaAlignJustify className="text-white h-6 w-6 " />
                }
            </div>

        </div>
    );
};

export default Header;
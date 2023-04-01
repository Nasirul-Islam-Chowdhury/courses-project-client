import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/imges/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white body-font bg-slate-800 mt-10">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link className="flex title-font font-medium items-center md:justify-start justify-center ">
              <img className='w-10' src={img} alt="" />
              <span className="ml-3 text-xl">Learning Point</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">A good place to learn advance topic with low cost</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium   text-xl mb-3">Course Level</h2>
              <nav className="list-none mb-5">
                <li>
                  <Link>Beginner</Link>
                </li>
                <li>
                  <Link>Intermediate</Link>
                </li>
                <li>
                  <Link>Pro</Link>
                </li>
               
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium   text-xl mb-3">Course Duration</h2>
              <nav className="list-none">
                <li>
                  <Link>6 Weeks</Link>
                </li>
                <li>
                  <Link>10 Weeks</Link>
                </li>
                <li>
                  <Link>8 Weeks</Link>
                </li>
               
              </nav>
            </div>
          
          </div>
        </div>
        <div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap  flex-col sm:flex-row">
            <p className="text-sm text-center sm:text-left">© 2023 nasirchy-
              <Link className=" ml-1" target="_blank">@learning point</Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

              <Link className="ml-5">
                <FaFacebook className='w-8 h-8'/>
              </Link>
              <Link className="ml-5">
                <FaInstagram  className='w-8 h-8'/>
              </Link>
              <Link className="ml-5">
               <FaTwitter  className='w-8 h-8'/>
              </Link>
              <Link className="ml-5">
               <FaWhatsapp  className='w-8 h-8'/>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
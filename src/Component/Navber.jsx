import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaBars, FaUser } from "react-icons/fa";
import { MdClose } from 'react-icons/md';
export default function Navber() {
  let Links =[
    {name:"Home",link:"/",hover:'text-red-800'},
    {name:"product",link:"/products"},
    {name:"About",link:"/About"},
    {name:"Service",link:"/Service"},
    {name:"Contact",link:"/Contact"},
  ];
  let [open, setOpen] =useState(false);


  const state = useSelector((state) => state.HandleCart);
  return (
    <div>
      
      <div className="shadow-md h-full  w-full ">
        <div className=" container py-3 px-3 md:flex justify-between items-center bottom-1">
          {/* Logo */}
          <div className='flex text-2xl cursor-pointer items-center gap-2'>
            <FaUser className="w-7 h-7 text-blue-600"/>
            <span className="font-bold">Yemen <span className="text-blue-700">Store</span></span>
          </div>
          {/* icon */}
          <div onClick={()=>setOpen(!open)} className="w-10 h-10 text-3xl  absolute right-4 top-6 cursor-pointer md:hidden">
            {
              open ? (<MdClose/>) : ( <FaBars />)
            }
          </div>
         
          <ul className={` md:bg-transparent rounded-bl-[70px] ${open ? 'flex flex-col absolute z-10 w-1/2 h-auto right-0 top-[67px] gap-0 transition-all  py-1 duration-700 ease-in md:flex md:flex-row md:w-1/2 md:top-[-10px]  bg-white  md:justify-around  ': ' md:flex absolute  md:mr-16  z-auto right-0 top-[-490px]  md:top-[6px]   md:w-1/2 lg:w-1/3 md:justify-around '}
}`   
        }>
            {
              Links.map(link => 
                (
                  <li className="font-semibold pt-3 text-lg  text-center hover:border-blue-500 mb-1 border-b-2 md:border-0  transition-all  duration-500 ease-in   md:pt-4 md:mr-0 md:rounded-xl " key={Date.now()*Math.random()}>
                  <NavLink
               className={` text-stone-900 hover:text-blue-600 no-underline md:hover:translate-x-2 `}
               to={link.link}
             >
               {link.name}
             </NavLink>
             </li>)
                )   
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

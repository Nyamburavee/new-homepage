import React from "react";
import { useState } from "react";
import {NavLink} from "react-router-dom";


 const Navbar = () =>{
    const [isOpen, setIsopen] = useState(false);

    const toggle = () => {
        setIsopen(!isOpen)
    };

    const menuClose = () =>{
        setIsopen(false)
    };
    return(
        <div className="p-5 flex flex-col md:flex-row justify-between">
            <div className=" flex justify-between items-center">
                <img  src="logo.svg" alt="logo" />
                <img onClick={toggle} className=" lg:hidden" src="icon-menu.svg" alt="icon-menu" />
            </div>
            
            <div className={` text-garkGrayishBlue flex flex-col md:flex-row gap-8 md:gap-6 ${isOpen ? 'block p-6 text-garkGrayishBlue text-left  text-xl bg-white h-[815px] w-96 absolute top-0 right-0 z-40' 
                : 'hidden'} md:flex `}>
            
                { isOpen ? (<img onClick={menuClose} className=" md:hidden w-6 ml-auto mb-20" src="icon-menu-close.svg" alt="menu-close" />) : null }
                <NavLink className="navlink" to="/Home">Home</NavLink>
                <NavLink className="navlink" to="/New">New</NavLink>
                <NavLink className="navlink" to="/Popular">Popular</NavLink>
                <NavLink className="navlink" to="/Trending">Trending</NavLink>
                <NavLink className="navlink" to="/Categories">Categories</NavLink>
            </div>
                

        </div>
            
    )
}
export default Navbar
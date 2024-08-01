import React from "react";
import { useState } from "react";
import {NavLink} from "react-router-dom";


 const Navbar = () =>{
    const [isOpen, setIsopen] = useState(false);

    const toggle = () => {
        setIsopen(!isOpen)
    }
    return(
        <div className="p-5">
            <div className=" mr-auto ">
                 <img  src="logo.svg" alt="logo" />
            </div>
            <div>
                <img onClick={toggle} className=" lg:hidden" src="icon-menu.svg" alt="icon-menu" />
            </div>
            <div className="navlinks md:hidden flex md:flex-col lg:flex-row lg:gap-4">
            {isOpen && ( <div>
                <NavLink to="Home">Home</NavLink>
                <NavLink to="New">New</NavLink>
                <NavLink to="Popular">Popular</NavLink>
                <NavLink to="Trending">Trending</NavLink>
                <NavLink to="Categories">Categories</NavLink>
                </div>)}
                
            </div>

        </div>
            
    )
}
export default Navbar
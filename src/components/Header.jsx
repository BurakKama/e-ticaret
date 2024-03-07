/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { FaRegSun ,FaMoon,FaSearch  } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { CartContext } from "../context/CardProvider";
import { Link } from "react-router-dom";


const Header = () => {

        const {cartItems} = useContext(CartContext)


    const [color, setColor] = useState()

    useEffect(()=>{
        const root = document.getElementById('root')
        if(color){
            root.style.backgroundColor ="black"
            root.style.color ="white"
        }else{
            root.style.backgroundColor ="white"
            root.style.color ="black"
        }
    })

  return (
    <div className="flex justify-between items-center w-full h-8 px-2 space-y-5 ">
       <Link to="/"><div className="text-2xl font-semibold tracking-wider">Logo</div></Link> 
        <div className="reletive flex gap-x-5 justify-center items-center">
            <input className="outline-none border rounded-lg p-2 " type="search" placeholder="Ara..." />
            <FaSearch className="cursor-pointer absolute right-[18%] opacity-50" size={20} />
            <div onClick={()=>setColor(!color)}>
                {
                  color ?  <FaRegSun className="cursor-pointer" size={25}/>  :  <FaMoon className="cursor-pointer" size={25}/>
                }
            </div>
            <Link to="/detail/id"> 
            <FaBasketShopping className="cursor-pointer" size={25}/>
            <span className="absolute top-0 right-[11.75%] px-2 bg-red-600 text-white rounded-full text-sm">{cartItems.length}</span>
            </Link>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { FaShoppingCart } from 'react-icons/fa'

const CartBtn = () => {
    const state = useSelector((state)=> state.HandleCart)
    return (
        <>
            <NavLink to="/Cart" className={`  2xl:hover:bg-blue-700 xl:hover:bg-blue-700  lg:hover:bg-blue-700 text-white 2xl:py-2 2xl:px-4 xl:px-4 xl:py-2 lg:py-2 lg:px-4  rounded flex flex-row `}>
                <FaShoppingCart className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10" /> ({state?.length})
            </NavLink>
        </>
    )
}

export default CartBtn



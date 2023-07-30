import React, { useState } from  "react";
import { useSelector } from  "react-redux ";
import { useDispatch } from  "react-redux" ;
// import {delItem} from  "../redux/actions/index";
import { delItem } from "../redux/Action";
import HandleCart from "../redux/reducer/HandelCart";
import { NavLink } from  "react-router-dom" ;


const Cart = () => {
    // const [totle,setTotle]=useState();
    const state = useSelector((state)=> state.HandleCart)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
    
        return(
        
            <div className=" container px-24 my-4 bg-gray-50  rounded-2 " key={cartItem.id}>
              
                <div className=" shadow-md border-b-2 border-b-blue-800 pb-1">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="flex flex-row justify-center items-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="p-1">{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3 className="p-1 text-red-700 ">Your Cart is Empty !</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/Checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto shadow-md">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
     
            {state?.length === 0 && emptyCart()}
            {state?.length !== 0 && state?.map(cartItems)}
            {state?.length !== 0 && button()}
        </>
    )
}

export default Cart
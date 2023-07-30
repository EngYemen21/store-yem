// for add item to cart
import React from 'react'

export const addItem =(product)=>{
   
    return {
        type: "ADDITEM",
        payload: product
    }

}
// for Delete item from cart
export const delItem =(product)=>{
   
    return {
        type: "DELITEM",
        payload: product
    }

}
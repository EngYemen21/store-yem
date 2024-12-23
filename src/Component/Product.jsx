import React, { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/Action';
import { useParams, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Product() {
    const {id}= useParams();
    const [product,setProduct] =useState([]);
    const [loading , setloading]=useState(false);
    const dispatch =useDispatch();
  
    const addProduct= (product)=>{
        dispatch(addItem(product));


        toast('Done ..!  added to cart', {
            duration: 4000,
            position: 'top-center',
          
            // Styling
            style: { background:'#142A74',
            color: "#FFF",
            width:'250px',
            height:'50px',


        
        },
            className: '',
          
            // Custom Icon
            icon: '👏',
          
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
          
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
        
    }
    
    useEffect(()=>{
        const getProduct =async ()=>{
            setloading(true);
            const response=await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
           
            setloading(false);
        }
        getProduct();

    },[])
    const Loading =()=>{
        return (
            <>
                {/* Skeleton loading UI */}
            </>
        )
    }

    const ShowProduct = () => {
        return (
            < >
            <div className='my-4 col-md-6'>
                <img src={product.image} alt={product.title}  className='h-96 w-96' />
            </div>
            <div className='my-4 col-md-6'>
                <h4 className='p-1 text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='p-1'>{product.title}</h1>
                <p className="text-blue-500 lead fw-bolder">
                    Reating {product.rating && product.rating.rate }
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="p-1 display-7 fw-bolder">
                    $ {product.price}
                </h3>
                <p className='load'>{product.description}</p>
                <button className='px-4 py-2 m-3 text-center text-black no-underline rounded-md outline-none  border-1 border-blue-950 hover:bg-blue-700' onClick={()=>addProduct(product)}>Add to cart</button>
                <Toaster />
                <NavLink to="/cart" className='px-4 py-2 m-3 text-center text-black no-underline border-blue-900 rounded-md outline-none  border-1 hover:bg-blue-900'>go to cart</NavLink>
            </div>
            
            
            
            </>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

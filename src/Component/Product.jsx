import React ,{useEffect ,useState} from 'react';
import Skeleton from "react-loading-skeleton";
import {useDispatch} from 'react-redux';
import { addItem } from '../redux/Action';
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

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
             <div className="col-md-6">
        <Skeleton height={400}/>
        </div>
        <div className="col-md-6" style={{lineHeight:2  }}>
        <Skeleton height={50} width={300}/>
        <Skeleton height={75}/>
        <Skeleton height={25} width={150}/>
        <Skeleton height={50}/>
        <Skeleton height={150}/>
        <Skeleton height={50} width={100}/>
        <Skeleton height={50} width={100} style={{ marginLeft:6 }}/>
       
   </div>
            
            </>
        )
    }
    const ShowProduct= ()=>{
        
        return (
            < >
            <div className='col-md-6 my-4'>
                <img src={product.image} alt={product.title}  className='h-96 w-96' />
            </div>
            <div className='col-md-6 my-4'>
                <h4 className='text-uppercase text-black-50 p-1'>
                    {product.category}
                </h4>
                <h1 className='p-1'>{product.title}</h1>
                <p className="lead fw-bolder text-blue-500">
                    Reating {product.rating && product.rating.rate }
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-7 fw-bolder p-1">
                    $ {product.price}
                </h3>
                <p className='load'>{product.description}</p>
                <button className=' px-4 py-2 m-3  text-black border-1 outline-none rounded-md no-underline text-center  border-blue-950  hover:bg-blue-700' onClick={()=>addProduct(product)}>Add to cart</button>
                <Toaster />
                <NavLink to="/cart" className=' px-4 py-2 m-3  text-black border-1 outline-none rounded-md no-underline text-center  border-blue-900  hover:bg-blue-900'>go to cart</NavLink>
            </div>
            
            
            
            </>
        )
    }
  return (

    <div>
          <div className="container">
        <div className="row">
                {loading ? <Loading /> :<ShowProduct/> }
               
                </div>

          </div>
       
    </div>
  )
}

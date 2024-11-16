import React, { useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/Action';
import { useParams, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [user_id, setUserId] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
      const [data, setData] = useState([]);
   


      useEffect(() => {
        const getUser = async () => {
       
            try {
                const responseUser = await fetch(`http://127.0.0.1:8000/api/getUserId`);
                const dataUser = await responseUser.json();
                setUserId(dataUser);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
       
        }
        getUser();
    }, []);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://fakestoreapi.in/api/products/${id}`).then(res => res.json());
                // const data = await response.json();

                // setData(response.products);
                console.log(response.product)
                // setfilter(response.products);
                // setloading(false);


                setProduct(response.product);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
            setLoading(false);
        }
        getProduct();
    }, [id]);

    const addProduct = (product) => {
        dispatch(addItem(product));
        store(user_id);
    };

    const store = async (product) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/product', {
                title: product.title,
                description: product.description,
                price: product.price,
                image: product.image,
            }).then(({data})=>{
                console.log(data.message)
            });
            console.log('Product saved successfully');
        } catch (response) {
           if (response.status==442){
            console.log('Error saving product:',response.data.error);
           } 
           else {
            console.log (product);
           }
        }
    };

    const Loading = () => {
        return (
            <>
                {/* Skeleton loading UI */}
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6 my-4'>
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className='col-md-6 my-4'>
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating: {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bolder my-4">
                        $ {product.price}
                    </h3>
                    <p className='load'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={() => addProduct(product)}>Add to cart</button>
                    <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go to cart</NavLink>
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

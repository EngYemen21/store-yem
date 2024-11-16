import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { useMediaQuery } from "@react-hook/media-query";
import { NavLink } from "react-router-dom";
import { Service } from "./Services/Service";
import css from "./Products.module.scss";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const smallScreen = useMediaQuery("(max-width: 768px)");

  let ComponentMounted = true;
  useEffect(() => {
    //   const ax=axios.get("https://fakestoreapi.com/products");
    const getProducts = async () => {
      setloading(true);
      const response = await  fetch("https://fakestoreapi.in/api/products")
.then(res => res.json());

      if (ComponentMounted) {
        setData(response.products);
        console.log(data)
        setfilter(response.products);
        setloading(false);
      }
    };
    getProducts();
  }, []);
  const Loading = () => {
    return ( <>

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

    </>)
  };
const filterProduct = (cat)=>{
  setSelectedCategory(cat);
  if (cat === "All") {
    setfilter(data);
  } else {
    
    const updateList = data.filter((x)=>x.category === cat);
    setfilter(updateList);
  }
}


const ShowSmall = () => {
  return (
    <>
    <div className="flex flex-col justify-around my-3 ">
  
    <p className="mb-2 text-2xl font-bold text-center">Latest Products</p>
    <div className="flex items-center justify-center mb-1">
  <label htmlFor="category" className="mr-2 text-lg ">Filter by category:</label>
  <div className="relative">
    <select
      id="category"
      value={selectedCategory}
      onChange={(e) => filterProduct(e.target.value)}
      className="block w-full px-4 py-2 pr-8 leading-tight bg-gray-100 border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
    >
      <option key="All" value="All">All</option>
      <option key="tv" value="tv">tv</option>
      <option key="audio" value="audio">audio</option>
      <option key="appliances" value="appliances">appliances</option>
      <option key="gaming" value="gaming">gaming</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.707 7.293a1 1 0 0 0-1.414-1.414L10 9.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4z"
        />
      </svg>
    </div>
  </div>
</div>

          
    </div>
     


    <div className={`flex flex-wrap justify-center `}>

      {filter.map((product) => {
        return (
          <>
           <div className="flex flex-row w-80 sm:w-1/2 md:w-1/3 xl:w-1/4 ">
              <div className="m-2 bg-white shadow-2xl sm:m-0 rounded-2xl sm:shadow-2xl md:m-0" key={product.id}>
                <img
                  src={product.image}  style={{ height:"250px" ,width:"300px" }}
                  className="p-2 "
                  alt={product.title}
                />
                 
                <div className="flex flex-col ">
                  <h5 className="mt-2 text-2xl text-center cursor-pointer hover:text-purple-950 ">{product.title.substring(0,12)}</h5>
                  <p className="m-2 text-2xl text-center hover:text-purple-950 cursor-point">{product.price} $</p>
                
                  <NavLink to={`/Products/${product.id}`} className={` bg-violet-950 p-3 text-center text-white no-underline  hover:bg-violet-900 rounded-lg shadow-2xl`}>
                   Buy Now
                  </NavLink>
                </div>
             </div>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
};












  const Showproduct = () => {
    return (
      <>
    
    <div className={`flex flex-row m-1 justify-around items-center`}>
        <p className={` text-2xl `}>Latest Products</p>
        <div className={` mb-2 m-1`}>
          <button className="px-3 py-3 m-1 text-white bg-violet-950 border-1 hover:bg-violet-800 rounded-xl " onClick={()=>setfilter(data)}>All</button>
          <button className="px-2 py-3 m-1 text-black bg-white hover:border-violet-900/100 rounded-xl border-1 " onClick={()=>filterProduct("tv")}>
           tv
          </button>
          <button className="px-2 py-3 m-1 text-black bg-white hover:border-violet-900/100 rounded-xl border-1" onClick={()=>filterProduct("audio")}>
          audio
          </button>
          <button className="px-2 py-3 m-1 text-black bg-white hover:border-violet-900/100 rounded-xl border-1 " onClick={()=>filterProduct("appliances")}>appliances</button>
          <button className="px-2 py-3 m-1 text-black bg-white hover:border-violet-900/100 rounded-xl border-1 "  onClick={()=>filterProduct("gaming")}>gaming</button>
        </div>
        </div>  

        
    

  
        <div className={`flex flex-wrap justify-center`}>
        {filter.map((product) => {
          return (
            <>
             {/* <div className="flex flex-row w-80 sm:w-1/2 md:w-1/3 xl:w-1/4 "> */}
             <div className="flex-grow-0 flex-shrink-0 m-2 bg-white shadow-2xl sm:m-0 rounded-2xl sm:shadow-2xl md:m-0" key={product.id}>                  <img
                    src={product.image}  style={{ height:"250px" ,width:"300px" }}
                    className="p-2 "
                    alt={product.title}
                  />
                   
                  <div className="flex flex-col ">
                    <h5 className="mt-2 text-2xl text-center cursor-pointer hover:text-purple-950 ">{product.title.substring(0,12)}</h5>
                    <p className="m-2 text-2xl text-center hover:text-purple-950 cursor-point">{product.price} $</p>
                  
                    <NavLink to={`/Products/${product.id}`} className={` bg-violet-950 p-3 text-center text-white no-underline hover:bg-violet-900 rounded-lg shadow-2xl `}>
                     Buy Now
                    </NavLink>
                  </div>
               </div>
              {/* </div> */}
            </>
          );
        })}
        </div>
      </>
    );
  };
 

  return (
    <div className="py-1 my-2 2xl:container 2xl:mx-auto">
      <div className={`row justify-center  `}>
      
      
      {loading ? <Loading /> : smallScreen ? <ShowSmall /> : <Showproduct />}
       
      </div>
    
    </div>
  );
};
export default Products;

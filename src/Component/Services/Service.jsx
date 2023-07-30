import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import add from '../../../public/icon/add_shopping_car.png';
import check from '../../../public/icon/check_file.png';
import exchange from '../../../public/icon/exchange.png';
export const Service = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="   ">
      <div className="container mx-auto ">
        
        <h2 className="text-2xl text-gray-700 mt-2  "> Our Best Services</h2>
        <Slider {...settings}  className="  overflow-hidden ">
          <div className="p-2 ">
            <div className=' rounded-lg shadow-lg m-2   md:w-[370px] h-full p-1'>
              <img className=" block mx-auto h-16 w-16 "  src={add} alt="First slide" />
              <div className="text-center p-2  w-full h-full overflow-hidden">
                <h3 className="font-bold text-lg mb-2">Free Shopping</h3>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae nobis, officiis!
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae nobi
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 ">
          <div className=' rounded-lg shadow-lg m-2   md:w-[370px] h-full p-1'>
             
             <img className=" block mx-auto h-16 w-16 "  src={check} alt="First slide" />
              <div className="text-center p-2  w-full h-full overflow-hidden">
                <h3 className="font-bold text-lg mb-2">Free Shopping</h3>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae nobis, officiis!
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae nobi
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 ">
          <div className=' rounded-lg shadow-lg m-2   md:w-[370px] h-full p-1'>
          <img className=" block mx-auto h-16 w-16 "  src={exchange} alt="First slide" />

              <div className="text-center p-2 w-full h-fulloverflow-hidden">
                <h3 className="font-bold text-lg mb-2">Free Shopping</h3>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae nobis, officiis!
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae nobi
                </p>
              </div>
            </div>
          </div>
        
        </Slider>
      </div>
    </div>
  );





















  
//   return (
//     <div className={`container bg-slate-500  ` }>
// <h2 className={`text-secondary border-bottom border-primary border-1 p-2 fs-4 ${css.textsecondary}`}>Our Best Services</h2>
// <div  className={`d-flex `} >


// <div  className={`card text-center `} >
//   <div className="card-body">
//     <img src="/public/icon/add_shopping_car.png" alt="" />
//     <h5 className="card-title">Free Shopping</h5>
//     <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae nobis, officiis!</p>
  
//   </div>
// </div>

// <div  className={`card text-center `}>
//   <div className="card-body">
//     <img src="/public/icon/exchange.png" alt=""  />
//     <h5 className="card-title">Return Exchange</h5>
//     <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae nobis, officiis!</p>
   
//   </div>
// </div>


// <div  className={`card text-center `}>
//   <div className="card-body">
//     <img src="/public/icon/check_file.png" alt="" />
//     <h5 className="card-title">Safe Shopping</h5>
//     <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae nobis, officiis!</p>
   
//   </div>
// </div>
// </div>



//     </div>
//   )
}

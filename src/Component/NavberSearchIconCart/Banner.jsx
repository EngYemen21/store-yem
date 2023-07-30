import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../../public/images/f61.png"
import img2 from "../../../public/images/IMG-20230719-WA0002.jpg"
import img3 from "../../../public/images/IMG-20230719-WA0003.jpg"
import img4 from "../../../public/images/IMG-20230719-WA0006.jpg"
import img5 from "../../../public/images/IMG-20230719-WA0008.jpg"



export const Banner = () => {
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
    <div className="  ">
      <div className="container mx-auto ">
        <Slider {...settings}  className=" overflow-hidden ">
          <div className="p-1">
            <div className="bg-white rounded-lg shadow-sm h-full p-1   ">
            <img className="w-full h-56 "  src={img1} alt="one slide" />
              {/* <img className="w-full h-56 " src="/public/images/IMG-20230719-WA0006.jpg"/> */}
              {/* <div className="px-4 py-4">
                <h3 className="font-bold text-lg mb-2">اسم المنتج</h3>
                <p className="text-gray-700 text-base">
                  وصف المنتج الذي يحتوي على بعض المعلومات الأساسية حول المنتج وميزاته.
                </p>
              </div> */}
            </div>
          </div>
          <div className="p-1">
            <div className="bg-white rounded-lg shadow-sm  h-full p-1  ">
            {/* <img className="w-full h-56 " src='/public/images/IMG-20230719-WA0011.jpg' alt="second slide" /> */}
            <img className="w-full h-56 "  src={img2}  alt='second slide'/>
            
            </div>
          </div>
          <div className="p-1">
            <div className="bg-white rounded-lg shadow-sm  h-full p-1 ">
              <img className="w-full h-56 object-cover"  src={img3}   alt="Third slide" />
             
            </div>
          </div>
          <div className="p-1">
            <div className="bg-white rounded-lg shadow-sm  h-full p-1 ">
              <img className="w-full h-56 object-cover"  src={img4}   alt="Fourth slide" />
             
            </div>
          </div>
          <div className="p-1">
            <div className="bg-white rounded-lg shadow-sm h-full p-1  ">
              <img className="w-full h-56 object-cover" src={img5}  alt="Fifth slide" />
             
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
import React from 'react'
import Login from '../Buttons/Login';
import SingUp from '../Buttons/SingUP';
import CartBtn from '../Buttons/CartBtn';

export const NavberSearchIconeCart = () => {
  return (
    <div className='md:shadow-md w-full flex flex-row justify-around items-center  bg-blue-800  ' style={{  }}>
     
       
         <div className=' w-[200px] md:w-1/2    '>
          
            
            <input type="search" name="" placeholder='Search' id="" className='mr-1 md:p-2 md:m-2 md:shadow-md w-[350px] md:w-[450px] ml-1 rounded-md hover:border-teal-500 border-l-4 border-indigo-500 outline-0  '   />
         </div>
         <div className='flex flex-row md:gap-5 mr-1   justify-between items-center '> 
         <div className=''>
                 <Login/>
         </div>
         <div> <SingUp/> 
            
            </div>
            <div className=''>
             <CartBtn/> 
            </div>

          
             
             
        </div>
       
          
          
    </div>
  )
}

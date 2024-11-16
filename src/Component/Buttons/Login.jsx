
import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineLogin } from "react-icons/ai";


import {   useNavigate } from 'react-router-dom';
import { Admin } from "../../Admins/Admin";
import { Users } from "../../Users/Users";

const Login = () => {

  const initivalue ={
    email:'',
    password :''
};
const [form,setForm]=useState(initivalue);
  const [errorForm,seterrorForm]=useState({});
  const [isSumit,setIsSubmit]=useState(false);
  const [userType,setUserType]=useState(null);
  const [logged,setLogged]=useState(false);
  const [Email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigateTo = useNavigate();

  const handelSumit=(e)=>{
    e.preventDefault();
    seterrorForm(Validate(form));
    setIsSubmit(true);
    if (form.email === "admin@gmail.com" && form.password === "1234567") 
    {   console.log(Email)
      localStorage.setItem('userType','admin');
      setUserType(localStorage.getItem('userType'));
       
      toast('login Admin Suuccessfully', {
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
      
      navigateTo('/Admin') ;
    }
    else if (form.email ===Email && form.password ===password) {
      // alert('login User Suuccessfully');
      localStorage.setItem('userType','user');
      setUserType(localStorage.getItem('userType'));
      
      toast('login User Suuccessfully', {
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

      navigateTo('/Users') ;
    }
    else {
      alert ("error");
    }
    
    }
  

  useEffect(() => {
    
    const isLog = localStorage.getItem('logged');
    const isPerson =localStorage.getItem('userType');
    const Email=localStorage.getItem('email');
    const password=localStorage.getItem('password');
    setEmail(Email);
    setPassword(password);
    setUserType(isPerson);
    setLogged(isLog === 'true');
  },[]);

     const  handleChange =(e)=>{
    
      const {name,value}=e.target;
      setForm ({
        ...form,[name]:value
      });

      console.log(form)
     }
     const Validate =(values)=>{
      const errors ={};
      const regEmai =/^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;
      if (!values.email){
        errors.email="Email Require"
      }
      else if (!regEmai.test(values.email)){
        errors.email="Email not valid"
      }
      if (!values.password){
        errors.password="password is require";
      }
     
      return errors



     } 
  return (
    <>
 

    
          {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className={` md:hover:bg-blue-700 text-white font-bold py-2 px-1 rounded`}
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <AiOutlineLogin className="w-6 h-6 xl:w-10 xl:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-10 2xl:h-10  sm:mr-3 lg:mr-0" />
      </button>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign in With Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span> Sign in With
                Facebook
              </button>
              <form  onSubmit={handelSumit} >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label ">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  
                
                { errorForm.email && (
  <p style={{ color: 'red' }}>{errorForm.email}</p>
) }
                 
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                            {errorForm.password && (
              <p style={{ color: 'red' }}>{errorForm.password}</p>
            ) }
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    name=""
                    value=""
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 "
                
                >
                  Submit
                </button>
                <Toaster />
              </form>
            </div>
          </div>
        </div>
      </div>


                            
      
    </>
  );
};

export default Login;

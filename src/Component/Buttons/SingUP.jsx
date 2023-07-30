import React, { useEffect, useState } from "react";
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Login from "./Login";

const SingUp = () => {
  const [errorForm, setErrorForm] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userType, setUserType] = useState(null);
  const [logged, setLogged] = useState(false);
  const navigateTo = useNavigate();

  const initialValues = {
    username: '',
    email: '',
    password: ''
  };
  const [form, setForm] = useState(initialValues);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm(Validate(form));
    setIsSubmit(true);
   
    

    if (form.email === "admin@gmail.com" && form.password === "1234567") {
      localStorage.setItem('name', form.username);
      localStorage.setItem('logged', true);
      localStorage.setItem('userType', 'admin');
      localStorage.setItem('email',form.email);
      localStorage.setItem('password', form.password);
      setLogged(localStorage.getItem('logged'));
      setUserType(localStorage.getItem('userType'))
      console.log(localStorage.getItem('logged'));
      navigateTo('/Admin');
    } else {
      localStorage.setItem('name', form.username);
      localStorage.setItem('logged', 'true');
      localStorage.setItem('email',form.email);
      localStorage.setItem('password', form.password);
      localStorage.setItem('userType', 'user');
      setLogged(localStorage.getItem('logged'));
      setUserType(localStorage.getItem('userType'));
      console.log(localStorage.getItem('logged'));
      navigateTo('/Users');
    }
    
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const Validate = (values) => {
    const errors = {};
    const regEmai = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regEmai.test(values.email)) {
      errors.email = "Email not valid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  }
  return (
    
        <>
       
          <button
        type="button"
        className={`2xl:hover:bg-blue-700 xl:hover:bg-blue-700 lg:hover:bg-blue-700 font-bold py-2 px-2 rounded text-white`}
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <FaUser
          className="w-6 h-6 xl:w-10 xl:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-10 2xl:h-10 sm:mr-3 lg:mr-0"
        />
      </button>

      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign up With Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span> Sign up With Facebook
              </button>
              <form onSubmit={handleSubmit} id='hid'>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    value={form.username}
                    onChange={handleChange}
                    name="username"
                    className="form-control"
                    id="exampleInput"
                  />
                </div>
                {errorForm.username && <p style={{ color: "red" }}>{errorForm.username}</p>}

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
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
                </div>
                {errorForm.email && <p style={{ color: "red" }}>{errorForm.email}</p>}
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
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                {errorForm.password && <p style={{ color: "red" }}>{errorForm.password}</p>}

                <button type="submit" className="btn btn-outline-primary w-100 mt-5 ">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
   
   
   </>
    
  );
};

export default SingUp;
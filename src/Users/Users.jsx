import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Users = () => {
  const navigateTo = useNavigate();
  const [userType, setUserType] = useState();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isUser = localStorage.getItem('userType');
    const isLog = localStorage.getItem('logged');
    setIsLogged(isLog);
    setUserType(isUser);
    if(userType==='user')
    setIsLogged(true);
  });

  const logout = () => {
    // localStorage.clear();
    localStorage.removeItem('userType');
    setUserType(localStorage.removeItem('userType'));
  
    navigateTo('/');
  };



  return (
    <div>
      {userType === 'user' ? (
        <div>
          <h1 className="p-1">Welcome to the user page</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
        
          { navigateTo('/')}
        </>
      )}
   
    </div>
  );
};
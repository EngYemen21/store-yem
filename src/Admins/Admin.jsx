import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

export const Admin = () => {
  const navigateTo = useNavigate();
  const [userType, setUserType] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem('userType');
    const isLog = localStorage.getItem('logged');
    setIsLogged(isLog);
    setUserType(isAdmin);
    if(userType==='admin')
    {
    setIsLogged(true)
    }
  });

  const logout = () => {
    // localStorage.clear();
    localStorage.removeItem('userType');
    setUserType(localStorage.removeItem('userType'));
  
    navigateTo('/');
  };

  return (
    <div>
      {userType === 'admin' ? (
        <div>
          {    console.log(userType , " : Admin page in return")
}
          <h1 className="p-1">Welcome to the Admin page</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
          {navigateTo('/')}
        
        </>
      )}
    </div>
  );
};
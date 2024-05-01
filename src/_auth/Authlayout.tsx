import React from 'react'
import nav from '@/comp/nav';
import { Navigate , Outlet } from 'react-router-dom';
const Authlayout = () => {
    const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="flex flex-row justify-between items-center h-screen">
            <img
              src="../../images/login.png"
              alt="leftPhot"
              className="hidden lg:block h-screen  w-1/2  -ml-14  rotate-0"
            />
            
            <Outlet />
            
          </div>
        </>
      )}
    </>
  );
}

export default Authlayout

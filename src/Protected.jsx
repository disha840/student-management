import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
    const login=localStorage.getItem("isLogIn");
    if(login!=="true"){
       return <Navigate to='/' replace/>
    }

  return children;
}

export default Protected

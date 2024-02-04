import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../context/AuthContext'

const Logout = () => {
    const {LogoutUser}=useContext(AppContext)
    useEffect(()=>{
      // localStorage.removeItem("token");
        LogoutUser()
    },[LogoutUser])
  return <Navigate to="/login"/>
}

export default Logout

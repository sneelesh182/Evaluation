import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { FetchContext } from '../Contexts/FetchContext'
export const PrivateRoute = ({children}) => {
const {valid}=useContext(FetchContext)
  if(valid){
    return children
  }else{
    return <Navigate to ={'/search'} />
  }
}

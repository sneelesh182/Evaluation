import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/search'>Search</Link>
        <Link to='/countries'>Countries</Link>
        <Link to='/allCountries'>All Countries</Link>
    </div>
  )
}

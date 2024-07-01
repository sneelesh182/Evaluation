import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Search } from '../Components/Search'
import { Countries } from '../Pages/Countries'
import { PrivateRoute } from './PrivateRoute'
import { AllCountries } from '../Components/AllCountries'
export const AllRoutes = () => {
  return (
    <Routes>
 <Route path='/' element={<Home />}/>
 <Route path='/search' element={<Search />}/>
 <Route path='/countries' element={
    <PrivateRoute>
        <Countries />
    </PrivateRoute>
 }/>
 <Route path='/allCountries' element={<AllCountries />}/>
    </Routes>
  )
}

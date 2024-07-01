import React, { useContext, useEffect, useRef, useState } from 'react'
import { FetchContext } from '../Contexts/FetchContext'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
    const [search,setSearch]=useState('')
    const {getData,isValid}=useContext(FetchContext)
    const ref=useRef('')
    const navigate=useNavigate()
    const handleChange=(e)=>{
       const value=e.target.value

        if(value.length<2){
            return false
        }else{
            setSearch(value)
        }

       
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setTimeout(() => {
            getData(search)
            isValid(true)
            navigate('/countries')     
        },3000);
       
    }
    useEffect(()=>{
        ref.current.focus()
    },[])
  return (
    <div className='form'>

            <h3>Make a search by currency</h3>
        <form className='form-box' onSubmit={handleSubmit}>
            <input className='inp-box' type="text" ref={ref} name='currencyCode' placeholder='search' onChange={(e)=>{
                handleChange(e)
            }} />
            <button type='submit'>Go</button>
        </form>
        </div>
  )
}

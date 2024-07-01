import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const AllCountries = () => {
const [data,setdata]=useState([])
const [sort,setSort]=useState([])
    useEffect(()=>{
        const fetchAll=async ()=>{
            let res=await axios.get(`https://restcountries.com/v3.1/all`)
            setdata(res.data)
        }
        fetchAll()
    },[])

    const handleChange=(e)=>{

        const narr=data.sort((a,b)=>{
            return a.name.common-b.name.common
        })
        setSort(narr)
    }

  return (
    <div>
        <select onChange={(e)=>{
            handleChange(e)
        }}>
<option value="">sort by</option>
<option value="name">Name</option>
</select>
    <div className='contain'>
      
        {data && data.map((ele,i)=>{
            return <div className='card2' key={ele.cca2}>
                <h4>Name: {ele.name.common}</h4>
                <h4>Capital:{ele.capital}</h4>
              
            <img className='flag' src={ele.flags.png} alt="flag" />
            </div>
        })}
         {sort && sort.map((ele,i)=>{
            return <div className='card2' key={ele.cca2}>
                <h4>Name: {ele.name.common}</h4>
                <h4>Capital:{ele.capital}</h4>
              
            <img className='flag' src={ele.flags.png} alt="flag" />
            </div>
        })}
    </div>
    </div>
  )
}

import React, { useContext } from 'react'
import { FetchContext } from '../Contexts/FetchContext'

export const Countries = () => {
    const {data,loading,currency} =useContext(FetchContext)
    const url=`https://flagsapi.com/cca2/shiny/64.png`

  return (
 <div>
        {loading && <h4>Loading...</h4> }
        {data && data.map((ele,i)=>{
            return <div className='card1' key={ele.cca2}>
                <h4>Name: {ele.name.common}</h4>
                <h4>Capital:{ele.capital}</h4>
                <h4>Currency: {currency}</h4>
            <img className='flag' src={ele.flags.png} alt="flag" />
            </div>
        })}
       </div> 

  )
}

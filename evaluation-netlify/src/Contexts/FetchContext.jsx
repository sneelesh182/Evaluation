import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const FetchContext=createContext()

export const FetchContextProvider=({children})=>{
const [data,setdata]=useState([])
const [loading,setLoading]=useState(true)
const [currency,setCurrency]=useState('')

const [valid,isValid]=useState(false)
        const getData=async(search)=>{
            try{
                let res=await axios.get(`https://restcountries.com/v3.1/currency/${search}`)
setdata(res.data)
setCurrency(search)
setLoading(false)
            }catch(error){
                alert(error)
            }
           
        }
      

    
    
    return (
        <FetchContext.Provider value={{data,getData,valid,isValid,loading,currency}}>
            {children}
        </FetchContext.Provider>
    )
}
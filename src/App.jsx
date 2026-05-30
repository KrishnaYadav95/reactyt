import React, { useEffect } from 'react'
import Ex from './components/Ex'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

const[data , setData]= useState([])

  const getData= async ()=>{
  const response= await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
 
  setData(response.data)
  console.log(data[0].download_url)
  }
useEffect(()=>{
  getData()
},[])

  return (
    <div className='p-10'>
     <button onClick={getData}  className='bg-emerald-600 text-white px-4 py-2 text-2xl rounded font-medium active:scale-90'>Get Data</button>
   <div className='p-5 bg-gray-900'>hello
   {data.map(function(elem , idx){
   return (
       <div key={idx} className= 'bg-gray-800 justify-between w-full px-7 py-6 rounded mb-3'>
    <img className='h-40' src={elem.download_url} alt=""/>
     </div>  
   )}
   )}
   </div>
    </div>
  )
}

export default App
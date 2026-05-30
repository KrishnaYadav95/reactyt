import React from 'react'

const Card = (props) => {
    console.log(props.profilePhoto)

  return (
    <div className='px-4 py-4 border-2 border-gray-300 gap-5 mr-4 bg-white text-black inline-block p-6 text-center rounded'>
       <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.profilePhoto} alt=""/>
       <h1 className='text-2xl font-semibold mb-4'> {props.username} </h1>
       <h4 className='text-blue-400'> {props.profession}</h4>
         <h2> {props.city} , {props.age}</h2>
         <button className='bg-emerald-700 text-white px-4 py-2 rounded font-medium'> Add Friend</button>
    </div>
  )
}

export default Card
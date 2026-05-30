import React from 'react'
import Ex2 from './Ex2'
const Ex = (props) => {
  return (
    <>
    <div>Main hoon EX {props.name}</div>
    <Ex2 name={props.name}/>
    </>
  )
}

export default Ex
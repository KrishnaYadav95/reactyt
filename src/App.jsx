import React from 'react'
import Card from './components/Card'
const App = () => {

const user=[
  {
    "name": "Aarav Sharma",
    "age": 28,
    "profession": "Software Engineer",
    "city": "Bengaluru",
    "profilePhoto": "https://example.com/profiles/aarav.jpg"
  },
  {
    "name": "Priya Mehta",
    "age": 32,
    "profession": "Graphic Designer",
    "city": "Mumbai",
    "profilePhoto": "https://example.com/profiles/priya.jpg"
  },
  {
    "name": "Rohan Verma",
    "age": 25,
    "profession": "Data Analyst",
    "city": "Delhi",
    "profilePhoto": "https://example.com/profiles/rohan.jpg"
  },
  {
    "name": "Sneha Kapoor",
    "age": 30,
    "profession": "Marketing Manager",
    "city": "Hyderabad",
    "profilePhoto": "https://example.com/profiles/sneha.jpg"
  },
  {
    "name": "Vikram Singh",
    "age": 35,
    "profession": "Photographer",
    "city": "Jaipur",
    "profilePhoto": "https://example.com/profiles/vikram.jpg"
  }
]

  return (
    <div className='p-10'>
      {user.map(function(elem, idx){
       return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} profilePhoto={elem.profilePhoto}/>
      })}

      

    </div>
  )
}

export default App
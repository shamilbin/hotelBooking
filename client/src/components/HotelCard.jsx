import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = ({room, index}) => {
  return (
  <Link to={'/room/' + room._id} onClick={()=>scrollTo(0,0)} key={room._id}>

    <img src={room} alt="" />
    
  </Link>
  )
}

export default HotelCard

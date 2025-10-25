import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'

const RoomDetails = () => {

    const {id}=useParams()
    const [room , setRoom ] = useState(null)
    const [mainImage,setMainImage]=useState(null)

    useEffect(()=>{
        const room =  roomsDummyData.find(room=>room.id===id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    },[])


  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 lx:px-32 '>

        {/* Room Details  */}

        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 '>
            <h1 className='text-3xl md:text-4xl font-playfair'>
                {room.hotel.name} <span className='font-inter text-sm '> ({room.roomType}) </span>
                <p>20 % OFF</p>
            </h1>
        </div>
      
    </div>
  )
}

export default RoomDetails

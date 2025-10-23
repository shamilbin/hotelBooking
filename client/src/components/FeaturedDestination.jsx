import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
    const navigate=useNavigate()
  return (
    <div className=" flex flex-col items-center  px-6 md:px-16 lg:px-24 bg-slate-50 ">
<div className="mt-20">

        <Title Title={"Featured Destination "} subTitle={"Step into our curated world of remarkable hotels, each delivering unmatched sophistication, bespoke comfort, and experiences beyond imagination. "} />
</div>
      <div className=" flex flex-wrap items-center mb-20 justify-center gap-6 mt-20  ">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <button onClick={()=>{navigate("/rooms"); scrollTo(0,0 )}} className=" my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-200  transition-all cursor-pointer "> View All Destination  </button>
    </div>

  );
};

export default FeaturedDestination;

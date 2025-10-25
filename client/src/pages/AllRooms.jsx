import React from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

const AllRooms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 ">
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px">Hotel Rooms</h1>
          <p className="text-sm md:text-base mt-2 text-gray-500/90">
            {" "}
            Take Advantage of our limited time offers and special package to
            enhance your stay and create unforgettable stay .
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 border-b border-gray-800 last:pb-30 last:border-0  gap-6"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="images of room"
              title="View Room Details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />

            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200 Plus Review</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location icon" />
                <span>{room.hotel.address}</span>
              </div>
              {/* Room Amenites */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4 ">
                {room.amenities.map((item, index)=>(
                    <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70">
                        <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                        <p className="text-xs"> {item}  </p>
                    </div>
                ))}
              </div>
              {/* Room Price Per Night  */}
                    <p className="text-lg font-medium text-gray-700">  ₹{room.pricePerNight} /Night </p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}

      <div></div>
    </div>
  );
};

export default AllRooms;

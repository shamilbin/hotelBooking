import React from "react";
import Title from "../components/Title";

const MyBooking = () => {
  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        Title={`My Bookings`}
        subTitle={`Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks`}
        align="left"
      />

      <div>
        <div className="hidden md:grid md:grid-col-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3 ">
            <div className="w-1/3">Hotels</div>
            <div className="w-1/3">Date And Timings</div>
            <div className="w-1/3">Payments</div>

        </div>
      </div>
    </div>
  );
};

export default MyBooking;

import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="
        my-15
        flex
        flex-nowrap
        items-stretch
        gap-10
 
        rounded-xl
        bg-blue-600
        px-15
        pt-15
        text-white

        max-md:my-10
        max-md:flex-col
        max-md:items-center
        max-md:gap-6
        max-md:px-6
        max-md:pt-5
      "
    >
      {/* Left */}
      <div
        className="
          flex
          w-1/2
          flex-col
          justify-center
          pb-15

          max-md:w-full
          max-md:items-center
          max-md:p-0
          max-md:text-center
        "
      >
        <h2
          className="
            mb-5
            text-5xl
            font-bold
            leading-tight
            text-white

            max-md:text-xl
          "
        >
          Book Appointment
          <br />
          With 100+ Trusted Doctors
        </h2>

        <Link
          className="
            inline-flex
            w-fit
            items-center
            justify-center
            rounded-full
            bg-white
            px-8
            py-3.5
            text-base
            font-semibold
            text-gray-900
            no-underline
            transition
            duration-300
            hover:-translate-y-0.5
            hover:bg-gray-100
          "
          to="/create-account"
        >
          Create Account
        </Link>
      </div>

      {/* Right */}
      <div
        className="
          w-2/5
          
                 relative
          max-md:w-full
        "
      >
        <img
          src={assets.appointment_img}
          alt="Book an appointment"
          className="
           absolute
            right-0
            bottom-0
            w-full
            max-w-87.5
        
            
            max-md:hidden
          "
        />
      </div>
    </section>
  );
};

export default Banner;

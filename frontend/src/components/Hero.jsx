import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section
      className="
        my-10
        flex
        flex-nowrap
        items-stretch
        justify-center
        gap-10
        rounded-xl
        bg-[rgb(7,126,223)]
        px-20
        pt-15
        text-white
        max-[992px]:px-12.5
        max-[992px]:pt-12.5
        max-[768px]:gap-5
        max-[768px]:px-7.5
        max-[768px]:pt-10
        max-[600px]:my-6
        max-[600px]:flex-col-reverse
        max-[600px]:items-center
        max-[600px]:gap-6
        max-[600px]:rounded-lg
        max-[600px]:px-5
        max-[600px]:pt-6
        max-[600px]:text-center
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
          max-[768px]:w-[55%]
          max-[768px]:pb-10
          max-[600px]:w-full
          max-[600px]:items-center
          max-[600px]:pb-6
        "
      >
        <h1
          className="
            mb-5
            text-5xl
            font-bold
            leading-[1.2]
            text-white
            max-[992px]:text-[2.4rem]
            max-[768px]:text-[1.9rem]
            max-[600px]:text-[1.8rem]
          "
        >
          Book Appointment <br />
          with trusted doctors
        </h1>

        <div
          className="
            mb-7.5
            flex
            flex-col
            gap-4
            max-[600px]:items-center
          "
        >
          <p
            className="
              mb-0
              text-[1.2rem]
              leading-[1.6]
              text-white
              max-[992px]:text-[1.1rem]
              max-[768px]:text-base
              max-[600px]:text-base
            "
          >
            Find the best healthcare solutions for you and your family, schedule
            appointments with trusted doctors, and receive personalized care.
          </p>

          <img
            src={assets.group_profiles}
            alt="Group Profiles"
            className="
              w-35
              max-[768px]:w-25
              max-[600px]:w-25
            "
          />
        </div>

        <a
          href="/doctors"
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
            text-[#1a1a1a]
            no-underline
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#e0e0e0]
            max-[600px]:w-full
            max-[600px]:px-6
            max-[600px]:py-3
          "
        >
          Book Appointment
        </a>
      </div>

      {/* Right */}
      <div
        className="
          flex
          w-[45%]
          justify-center
          max-[768px]:w-[40%]
          max-[600px]:w-full
        "
      >
        <img
          src={assets.header_img}
          alt="Hero"
          className="
            h-auto
            w-full
            max-w-150
            object-contain
            max-[992px]:max-w-112.5
            max-[768px]:max-w-70
            max-[600px]:max-w-65
          "
        />
      </div>
    </section>
  );
};

export default Hero;

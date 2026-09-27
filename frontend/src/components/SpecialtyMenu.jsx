import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialtyMenu = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-semibold max-md:w-full max-md:text-center max-md:text-xl">
        Find By Specialty
      </h1>

      <p
        className="
          my-2
          w-1/3
          text-center
          text-base
          text-gray-800

          max-md:w-full
        "
      >
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>

      <div
        className="
          mt-4
          grid
          w-full
          max-w-200
          grid-cols-[repeat(auto-fit,minmax(100px,1fr))]
          gap-4

          max-md:grid-cols-[repeat(auto-fit,minmax(85px,1fr))]
          max-md:gap-3

          max-sm:grid-cols-[repeat(auto-fit,minmax(70px,1fr))]
          max-sm:gap-2
        "
      >
        {specialityData.map((speciality) => (
          <Link
            key={speciality.speciality}
            to={`/doctors/${speciality.speciality}`}
            onClick={() => window.scrollTo(0, 0)}
            className="
              flex
              flex-col
              items-center
              text-inherit
              no-underline
              transition-all
              duration-200
              ease-in-out
              hover:-translate-y-1.25
              hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]
            "
          >
            <img
              src={speciality.image}
              alt={speciality.speciality}
              className="
                mb-2
                h-20
                w-20
                rounded-full
                object-cover

                max-md:h-16
                max-md:w-16

                max-sm:h-14
                max-sm:w-14
              "
            />

            <h3
              className="
                m-0
                text-center
                text-sm

                max-sm:text-xs
              "
            >
              {speciality.speciality}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialtyMenu;

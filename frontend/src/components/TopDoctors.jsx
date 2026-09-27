import React, { useContext } from "react";
import { AppContext } from "../Context/AppContect";
import { Link } from "react-router-dom";

const TopDoctors = () => {
  const { doctors } = useContext(AppContext);

  return (
    <section
      className="
        mt-22.5
        flex
        flex-col
        items-center
        px-5

        max-xl:mt-17.5
        max-md:mt-12.5
        max-md:px-4
        max-sm:px-2.5
      "
    >
      <h1
        className="
          m-0
          text-center
          text-[2rem]
          text-gray-800

          max-lg:text-[1.7rem]
          max-md:text-2xl
          max-sm:text-xl
        "
      >
        Top Doctors to Book
      </h1>

      <p
        className="
          mt-2.5
          max-w-162.5
          text-center
          text-gray-500

          max-md:text-[0.95rem]
        "
      >
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div
        className="
          mt-8.75
          grid
          w-full
          grid-cols-[repeat(auto-fit,minmax(150px,200px))]
          gap-6

          max-xl:grid-cols-[repeat(auto-fit,minmax(120px,180px))]
          max-xl:gap-5

          max-lg:grid-cols-[repeat(auto-fit,minmax(150px,180px))]
          max-lg:gap-4.5

          max-md:mt-6
          max-md:grid-cols-[repeat(auto-fit,minmax(100px,150px))]
          max-md:justify-center
          max-md:gap-3.75

          max-sm:gap-2.5
        "
      >
        {doctors.slice(0, 10).map((doctor) => (
          <Link
            key={doctor._id}
            to={`/appointment/${doctor._id}`}
            className="
              flex
              flex-col
              overflow-hidden
              rounded-[10px]
              border
              border-[#e5e5e5]
              bg-white
              text-inherit
              no-underline
              transition-all
              duration-250
              ease-in-out
              hover:-translate-y-1.5
              hover:shadow-[0_8px_18px_rgba(0,0,0,0.12)]
            "
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="
                h-62.5
                w-full
                object-cover
                bg-[#eaefff]

                max-xl:h-55
                max-lg:h-50
                max-md:h-42.5
                max-sm:h-35
              "
            />

            <div
              className="
                p-4

                max-md:p-3
                max-sm:p-2.5
              "
            >
              <h3
                className="
                  m-0
                  mb-2
                  text-base
                  text-gray-800

                  max-md:text-[0.95rem]
                  max-sm:text-[0.85rem]
                "
              >
                {doctor.name}
              </h3>

              <p
                className="
                  m-0
                  text-[0.9rem]
                  text-gray-500

                  max-md:text-[0.8rem]
                  max-sm:text-[0.75rem]
                "
              >
                {doctor.speciality}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/doctors"
        onClick={() => window.scrollTo(0, 0)}
        className="
          mt-10
          rounded-lg
          bg-[#077edf]
          px-6
          py-3
          text-white
          no-underline
          transition-colors
          duration-200
          hover:bg-[#0564b2]

          max-md:mt-7.5
          max-md:px-5
          max-md:py-2.5
          max-md:text-[0.9rem]

          max-sm:w-full
          max-sm:max-w-55
          max-sm:text-center
        "
      >
        View All Doctors
      </Link>
    </section>
  );
};

export default TopDoctors;

import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContect";

const RelatedDoctors = ({ speciality, doctorId }) => {
  const { doctors } = useContext(AppContext);

  const relatedDoctors = useMemo(() => {
    if (doctors.length === 0) return [];

    return doctors.filter(
      (item) => item.speciality === speciality && item._id !== doctorId,
    );
  }, [doctors, speciality, doctorId]);

  if (relatedDoctors.length === 0) return null;

  return (
    <section
      className="
        mt-15
        flex
        w-full
        flex-col
        items-center
        justify-center
        gap-2.5
        text-center

        max-md:mt-11.25
        max-sm:mt-9
        max-sm:px-4
      "
    >
      <h2 className="m-0 text-3xl max-md:text-2xl max-sm:text-xl">
        Related Doctors
      </h2>

      <p>Simply browse through our extensive list of trusted doctors.</p>

      <div
        className="
          mt-5
          flex
          w-full
          flex-wrap
          items-center
          justify-center
          gap-6.25

          max-lg:gap-5
          max-md:gap-3.75
          max-sm:gap-3
        "
      >
        {relatedDoctors.map((item) => (
          <Link
            key={item._id}
            to={`/appointment/${item._id}`}
            onClick={() => scroll(0, 0)}
            className="
              flex
              w-50
              flex-col
              overflow-hidden
              rounded-xl
              border
              border-gray-300
              text-inherit
              no-underline
              transition
              duration-300
              hover:-translate-y-1.5
              hover:border-[#077edf]
              hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]
              focus-visible:outline-2
              focus-visible:outline-[#077edf]
              focus-visible:outline-offset-2

              max-lg:w-45
              max-md:w-40
              max-sm:w-37.5
            "
          >
            <img
              src={item.image}
              alt={item.name}
              className="
                h-50
                w-full
                object-cover
                bg-[#eaf6ff]

                max-lg:h-45
                max-md:h-40
                max-sm:h-35
              "
            />

            <div
              className="
                flex
                flex-col
                gap-1
                p-4

                max-md:p-3
              "
            >
              <h3 className="m-0 text-base max-sm:text-sm">{item.name}</h3>

              <p className="m-0 text-sm text-gray-600 max-sm:text-xs">
                {item.speciality}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedDoctors;

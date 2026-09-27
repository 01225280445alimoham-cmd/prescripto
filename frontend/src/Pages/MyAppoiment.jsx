import React, { useContext } from "react";
import { AppContext } from "../Context/AppContect";

const MyAppoiment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="mt-10 max-w-5xl mx-auto px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        My Appointments
      </h1>

      <ul className="space-y-5 list-none p-0 m-0">
        {doctors.slice(0, 2).map((item) => {
          const appointmentDate = "20-08-2026";
          const appointmentTime = "8:30 PM";

          return (
            <li
              key={item._id}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 flex flex-col md:flex-row gap-5 shadow-sm"
            >
              {/* Doctor Image */}
              <div className="shrink-0">
                <img
                  src={item.image}
                  alt={`Dr. ${item.name}, ${item.speciality}`}
                  className="w-full h-72 sm:w-40 sm:h-40 md:w-36 md:h-36 object-cover rounded-lg bg-indigo-50"
                />
              </div>

              {/* Doctor Information */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>

                <p className="text-indigo-600 text-sm font-medium mt-1">
                  {item.speciality}
                </p>

                <div className="mt-4 text-sm text-gray-600">
                  <p
                    className="font-medium text-gray-700 mb-1"
                    id={`address-label-${item._id}`}
                  >
                    Address
                  </p>
                  <address
                    className="not-italic"
                    aria-labelledby={`address-label-${item._id}`}
                  >
                    <p>{item.address.line1}</p>
                    <p>{item.address.line2}</p>
                  </address>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Date & Time:</span>{" "}
                    <time dateTime="2026-08-20T20:30">
                      {appointmentDate} | {appointmentTime}
                    </time>
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col justify-end gap-2 md:w-52">
                <button
                  type="button"
                  aria-label={`Pay online for appointment with Dr. ${item.name}`}
                  className="w-full px-4 py-2.5 rounded-lg text-sm font-medium border border-solid hover:bg-indigo-700 hover:text-blue-50  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200 cursor-pointer"
                >
                  Pay Online
                </button>

                <button
                  type="button"
                  aria-label={`Cancel appointment with Dr. ${item.name}`}
                  className="w-full px-4 py-2.5 rounded-lg  text-sm font-medium border border-solid hover:bg-red-500 hover:text-blue-50  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-colors duration-200 cursor-pointer"
                >
                  Cancel Appointment
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyAppoiment;

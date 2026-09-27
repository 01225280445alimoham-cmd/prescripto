import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContect";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const doctorInfo = doctors.find((doc) => doc._id === docId);

  const getAvailableSlots = () => {
    const today = new Date();
    const slots = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);

      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(17, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
        );

        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots = [];

      while (currentDate < endTime) {
        const timeFormatted = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          dateTime: new Date(currentDate),
          time: timeFormatted,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slots.push(timeSlots);
    }

    return slots;
  };

  useEffect(() => {
    const slots = getAvailableSlots();

    setDocSlots(slots);
    setSlotIndex(0);
    setSlotTime("");
  }, [docId]);

  const handleDateSelect = (index) => {
    setSlotIndex(index);
    setSlotTime("");
  };

  const handleTimeSelect = (time) => {
    setSlotTime(time);
  };

  const handleBookAppointment = () => {
    if (!slotTime) return;

    const selectedDate = docSlots[slotIndex]?.[0]?.dateTime;

    console.log("Booking appointment:", {
      docId,
      date: selectedDate,
      time: slotTime,
    });
  };

  if (!doctorInfo) return null;

  return (
    <main className="mt-8 sm:mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Doctor Information */}
      <section className="flex flex-col lg:flex-row gap-5 lg:gap-6">
        {/* Doctor Image */}
        <div className="w-full lg:w-[320px] shrink-0 bg-blue-600 rounded-xl overflow-hidden flex items-end justify-center">
          <img
            src={doctorInfo.image}
            alt={doctorInfo.name}
            className="w-full max-w-[320px] object-contain bottom-0"
          />
        </div>

        {/* Doctor Details */}
        <div className="flex-1 border border-gray-200 rounded-xl p-5 sm:p-7 lg:p-9 bg-white shadow-sm">
          {/* Name */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              {doctorInfo.name}
            </h1>

            <img
              src={assets.verified_icon}
              alt="verified"
              className="w-5 h-5"
            />
          </div>

          {/* Degree & Speciality */}
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <p className="text-gray-600 text-sm sm:text-base">
              {doctorInfo.degree} - {doctorInfo.speciality}
            </p>

            <span className="px-2.5 py-1 border border-gray-300 rounded-full text-xs sm:text-sm text-gray-600">
              {doctorInfo.experience}
            </span>
          </div>

          {/* About */}
          <div className="flex items-center gap-2 mt-6">
            <h2 className="font-semibold text-gray-800">About</h2>

            <img src={assets.info_icon} alt="info" className="w-4 h-4" />
          </div>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
            {doctorInfo.about}
          </p>

          {/* Fees */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <p className="text-gray-700">
              <span className="font-medium">Appointment fee:</span>{" "}
              <span className="text-blue-600 font-semibold">
                ${doctorInfo.fees}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="mt-12 sm:mt-14 max-w-4xl">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Booking slots
        </h2>

        {/* Date Picker */}
        <div className="mt-5 flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {docSlots.map((item, index) => {
            const isSelected = index === slotIndex;

            return (
              <button
                key={index}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleDateSelect(index)}
                className={`
                  shrink-0
                  w-16 sm:w-18
                  h-20 sm:h-22
                  rounded-2xl
                  border
                  flex flex-col
                  items-center
                  justify-center
                  gap-1
                  text-sm
                  transition-all
                  duration-200 
                   cursor-pointer
                  ${
                    isSelected
                      ? "bg-blue-600 border-blue-600 text-white shadow-md"
                      : "bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600"
                  }
                `}
              >
                <span className="font-medium">
                  {dayOfWeek[item[0]?.dateTime.getDay()]}
                </span>

                <span className="text-lg font-semibold">
                  {item[0]?.dateTime.getDate()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Time Picker */}
        <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
          {docSlots[slotIndex]?.map((item, index) => {
            const isSelected = item.time === slotTime;

            return (
              <button
                key={index}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleTimeSelect(item.time)}
                className={`
                  px-4 sm:px-5
                  py-2
                  rounded-full
                  border
                  text-xs sm:text-sm
                  transition-all
                  duration-200
                  cursor-pointer
                  ${
                    isSelected
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600"
                  }
                `}
              >
                {item.time}
              </button>
            );
          })}
        </div>

        {/* Book Button */}
        <button
          type="button"
          disabled={!slotTime}
          onClick={handleBookAppointment}
          className="
            mt-7
            w-full sm:w-auto
            min-w-55
            px-8
            py-3
            rounded-full
            bg-blue-600
            text-white
            font-medium
            transition-all
            duration-200
            hover:bg-blue-700
            disabled:bg-gray-200
            disabled:text-gray-500
            disabled:cursor-not-allowed
          "
        >
          Book an appointment
        </button>
      </section>

      {/* Related Doctors */}
      <section className="mt-16 flex justify-center">
        <RelatedDoctors
          speciality={doctorInfo.speciality}
          doctorId={doctorInfo._id}
        />
      </section>
    </main>
  );
};

export default Appointment;

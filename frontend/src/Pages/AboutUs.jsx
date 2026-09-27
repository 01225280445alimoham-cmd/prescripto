import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContect";

const AboutUs = () => {
  const { doctors } = useContext(AppContext);

  const stats = useMemo(() => {
    const specialities = new Set(doctors.map((doc) => doc.speciality));

    return {
      doctorCount: doctors.length,
      specialityCount: specialities.size,
    };
  }, [doctors]);

  const journeySteps = [
    {
      title: "Search",
      description:
        "Browse doctors by specialty, availability, and fee, so you know exactly what you're booking before you commit.",
    },
    {
      title: "Book",
      description:
        "Pick a day and a real open slot in a few taps. No phone calls, no waiting for someone to call you back.",
    },
    {
      title: "Visit",
      description:
        "Show up to your appointment. Your doctor already has your details on hand, ready to go.",
    },
    {
      title: "Follow up",
      description:
        "Message your doctor or rebook a check-in whenever you need to, right from the same place.",
    },
  ];

  const values = [
    {
      title: "Built around your time",
      description:
        "Real-time slots mean you book what's actually open, not what someone hopes is still available.",
    },
    {
      title: "Verified doctors only",
      description:
        "Every profile is checked before it goes live, so a booking is always with a real, licensed doctor.",
    },
    {
      title: "Clear, upfront fees",
      description:
        "You see the appointment fee before you book. No surprise charges waiting after the visit.",
    },
    {
      title: "Support that answers",
      description:
        "A real team is behind the app when a booking needs to change or something doesn't go to plan.",
    },
  ];

  return (
    <main className="w-full max-w-295 mx-auto px-4 sm:px-5 pt-8 sm:pt-10 pb-20 sm:pb-24 flex flex-col gap-14 sm:gap-20">
      {/* Hero */}
      <section className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-14 bg-sky-50 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-14">
        {/* Hero Content */}
        <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">
            About us
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight font-semibold text-gray-900">
            Care shouldn&apos;t wait on hold music.
          </h1>

          <p className="text-sm sm:text-base leading-7 text-gray-600">
            We built this platform so booking a doctor takes minutes, not a
            lunch break spent on the phone. Search by specialty, compare real
            availability, and confirm a visit that fits your day.
          </p>

          <Link
            to="/doctors"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
          >
            Find a doctor
          </Link>
        </div>

        {/* Statistics */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-5 lg:shrink-0">
          <div className="flex flex-col gap-1 bg-white border border-gray-200 rounded-xl px-5 py-4 min-w-0 sm:min-w-45 lg:min-w-55">
            <span className="text-2xl sm:text-3xl font-bold text-blue-600">
              {stats.doctorCount}+
            </span>

            <span className="text-xs sm:text-sm text-gray-500">
              Doctors on the platform
            </span>
          </div>

          <div className="flex flex-col gap-1 bg-white border border-gray-200 rounded-xl px-5 py-4 min-w-0 sm:min-w-45 lg:min-w-55">
            <span className="text-2xl sm:text-3xl font-bold text-blue-600">
              {stats.specialityCount}+
            </span>

            <span className="text-xs sm:text-sm text-gray-500">
              Specialities covered
            </span>
          </div>

          <div className="flex flex-col gap-1 bg-white border border-gray-200 rounded-xl px-5 py-4 min-w-0 sm:min-w-45 lg:min-w-55">
            <span className="text-2xl sm:text-3xl font-bold text-blue-600">
              10k+
            </span>

            <span className="text-xs sm:text-sm text-gray-500">
              Appointments booked
            </span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="flex flex-col items-start gap-4 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Why we started this
        </h2>

        <p className="text-sm sm:text-base leading-7 text-gray-600">
          Most people don&apos;t dread the doctor&apos;s visit itself, they
          dread everything before it: the hold music, the back-and-forth calls,
          the guessing over whether a slot is even open. We built this platform
          to remove that part. What&apos;s left is what booking a doctor should
          have been all along &mdash; choosing a time and showing up.
        </p>
      </section>

      {/* Journey */}
      <section className="flex flex-col items-center gap-8 sm:gap-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          How booking works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 w-full">
          {journeySteps.map((step, index) => (
            <div
              className="relative flex flex-col items-center gap-3"
              key={step.title}
            >
              {/* Connecting line */}
              {index !== journeySteps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+30px)] w-[calc(100%-60px)] h-0.5 bg-gray-200" />
              )}

              {/* Number */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                {index + 1}
              </div>

              <h3 className="text-base font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-gray-500 max-w-55">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="flex flex-col items-center gap-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          What we hold ourselves to
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-start text-left gap-2 border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-600 hover:shadow-lg"
            >
              <h3 className="text-base font-semibold text-gray-900">
                {value.title}
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-6 text-center bg-blue-600 rounded-2xl lg:rounded-3xl px-6 sm:px-10 py-10 sm:py-14">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white max-w-xl">
          Your next appointment is a few clicks away.
        </h2>

        <Link
          to="/doctors"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm hover:bg-sky-50 transition-colors duration-300"
        >
          Browse doctors
        </Link>
      </section>
    </main>
  );
};

export default AboutUs;

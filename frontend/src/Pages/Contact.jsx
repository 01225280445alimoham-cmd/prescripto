import React, { useState } from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="w-full text-gray-800">
      {/* Hero */}
      <section className="w-full min-h-70 flex items-center justify-center text-center px-5 py-12 bg-sky-50">
        <div className="max-w-2xl">
          <p className="mb-2.5 text-sm font-semibold tracking-[2px] text-indigo-500">
            GET IN TOUCH
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-gray-900">
            Contact <span className="text-indigo-500">Us</span>
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-[15px] leading-7 text-gray-500">
            We're here to help. Get in touch with our hospital team for
            appointments, inquiries, or any assistance you may need.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-[90%] max-w-300 mx-auto my-14 sm:my-20 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-17.5">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl sm:text-[28px] font-semibold text-gray-900">
            Get in Touch
          </h2>

          <p className="mt-3.5 mb-8 text-sm sm:text-[15px] leading-7 text-gray-500">
            Have a question or need assistance? Our team is ready to help you.
            You can reach us through any of the following methods.
          </p>

          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Location */}
            <div className="flex items-start gap-4 sm:gap-4.5">
              <div className="w-12 h-12 min-w-12 flex items-center justify-center rounded-full bg-indigo-50">
                <img
                  src={assets.map_icon}
                  alt="Location"
                  className="w-5.5 h-5.5 object-contain"
                />
              </div>

              <div>
                <h3 className="mb-1.5 text-base font-semibold text-gray-800">
                  Our Location
                </h3>

                <p className="text-sm leading-6 text-gray-500">
                  123 Medical Street, Suez, Egypt
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 sm:gap-4.5">
              <div className="w-12 h-12 min-w-12 flex items-center justify-center rounded-full bg-indigo-50">
                <img
                  src={assets.phone_number_icon}
                  alt="Phone"
                  className="w-5.5 h-5.5 object-contain"
                />
              </div>

              <div>
                <h3 className="mb-1.5 text-base font-semibold text-gray-800">
                  Phone Number
                </h3>

                <p className="my-1 text-sm leading-6 text-gray-500">
                  +20 100 123 4567
                </p>

                <p className="my-1 text-sm leading-6 text-gray-500">
                  +20 62 333 4567
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 sm:gap-4.5">
              <div className="w-12 h-12 min-w-12 flex items-center justify-center rounded-full bg-indigo-50">
                <img
                  src={assets.email_icon}
                  alt="Email"
                  className="w-5.5 h-5.5 object-contain"
                />
              </div>

              <div>
                <h3 className="mb-1.5 text-base font-semibold text-gray-800">
                  Email Address
                </h3>

                <p className="my-1 text-sm leading-6 text-gray-500">
                  info@hospital.com
                </p>

                <p className="my-1 text-sm leading-6 text-gray-500">
                  support@hospital.com
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4 sm:gap-4.5">
              <div className="w-12 h-12 min-w-12 flex items-center justify-center rounded-full bg-indigo-50">
                <img
                  src={assets.working_time_icon}
                  alt="Working hours"
                  className="w-5.5 h-5.5 object-contain"
                />
              </div>

              <div>
                <h3 className="mb-1.5 text-base font-semibold text-gray-800">
                  Working Hours
                </h3>

                <p className="my-1 text-sm leading-6 text-gray-500">
                  Emergency: 24/7
                </p>

                <p className="my-1 text-sm leading-6 text-gray-500">
                  Appointments: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 sm:p-8 lg:p-8.75 border border-gray-200 rounded-xl bg-white">
          <h2 className="text-2xl sm:text-[28px] font-semibold text-gray-900">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-md outline-none text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-md outline-none text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            {/* Phone + Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-md outline-none text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 border border-gray-300 rounded-md outline-none text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-32 px-4 py-3 border border-gray-300 rounded-md outline-none resize-y text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full sm:w-fit px-7 py-3 rounded-md bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 active:scale-[0.98] transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Emergency */}
      <section className="w-[90%] max-w-300 mx-auto mb-12 sm:mb-20 px-5 sm:px-8.75 py-6 sm:py-7.5 rounded-xl bg-sky-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="mb-1.5 text-sm font-semibold text-indigo-500">
            Need Emergency Assistance?
          </p>

          <h2 className="text-lg sm:text-[22px] font-semibold leading-7 text-gray-900">
            Our Emergency Department is Available 24/7
          </h2>
        </div>

        <a
          href="tel:+201001234567"
          className="w-full sm:w-auto text-center px-6 py-3 rounded-md bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors"
        >
          Call Emergency
        </a>
      </section>

      {/* Map */}
      <section className="w-[90%] max-w-300 mx-auto mb-12 sm:mb-20">
        <div className="mb-6">
          <p className="mb-1 text-xs sm:text-sm font-semibold tracking-[1.5px] text-indigo-500">
            FIND US
          </p>

          <h2 className="text-2xl sm:text-[28px] font-semibold text-gray-900">
            Our Location
          </h2>
        </div>

        <div className="w-full h-75 sm:h-100 overflow-hidden rounded-xl">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps?q=Suez,Egypt&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;

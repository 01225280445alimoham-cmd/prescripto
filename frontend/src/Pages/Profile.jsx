import { useState } from "react";
import { assets } from "../assets/assets.js";

const initialUserData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  phone: "+20 100 123 4567",
  gender: "Female",
  dob: "1996-04-12",
  image: assets.profile_pic,
  address: {
    line1: "12 Nile Street",
    line2: "Cairo, Egypt",
  },
};

const Profile = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [draftData, setDraftData] = useState(initialUserData);
  const [isEditMode, setIsEditMode] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
  };

  const handleFieldChange = (field, value) => {
    setDraftData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddressChange = (field, value) => {
    setDraftData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [field]: value,
      },
    }));
  };

  const handleEdit = () => {
    setDraftData(userData);
    setImagePreview(null);
    setIsEditMode(true);
  };

  const handleSave = () => {
    setUserData({
      ...draftData,
      image: imagePreview || userData.image,
    });

    setImagePreview(null);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setDraftData(userData);
    setImagePreview(null);
    setIsEditMode(false);
  };

  const displayData = isEditMode ? draftData : userData;

  return (
    <section
      className="w-full max-w-180 mx-auto px-4 pt-8 pb-16 bg-blue-50/60"
      aria-labelledby="profile-heading"
    >
      {/* Heading */}
      <h1
        id="profile-heading"
        className="
          relative
          mb-6
          pb-2.5
          text-3xl
          font-bold
          text-blue-900
          after:absolute
          after:bottom-0
          after:left-0
          after:h-1
          after:w-12
          after:rounded-full
          after:bg-blue-600
        "
      >
        My Profile
      </h1>

      {/* Card */}
      <div
        className="
          flex
          flex-col
          gap-6
          rounded-2xl
          border
          border-blue-100
          bg-white
          p-8
          shadow-lg
          shadow-blue-900/10
          max-sm:p-6
        "
      >
        {/* Avatar */}
        <div className="relative mx-auto w-fit">
          <img
            className="
              h-35
              w-35
              rounded-full
              border-4
              border-blue-50
              object-cover
              shadow-[0_0_0_3px_#bcdcff]
            "
            src={imagePreview || displayData.image}
            alt={`${userData.name}'s profile picture`}
          />

          {isEditMode && (
            <label
              className="
                absolute
                right-1
                bottom-1
                flex
                h-8.5
                w-8.5
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-blue-700
                text-xl
                leading-none
                text-white
                shadow-md
                transition
                hover:bg-blue-800
                focus-within:outline-2
                focus-within:outline-blue-600
                focus-within:outline-offset-2
              "
              htmlFor="profile-image-input"
            >
              <span aria-hidden="true">+</span>

              <span className="sr-only">Change photo</span>

              <input
                id="profile-image-input"
                className="sr-only"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>

        {/* Fields */}
        <fieldset className="flex flex-col gap-6">
          <legend className="sr-only">Personal details</legend>

          {/* Name */}
          <div className="flex flex-col gap-1.5 text-center">
            <label
              className="text-sm font-semibold text-blue-400"
              htmlFor="profile-name"
            >
              Name
            </label>

            {isEditMode ? (
              <input
                id="profile-name"
                className="
                  w-full
                  rounded-lg
                  border
                  border-blue-200
                  bg-blue-50
                  px-3
                  py-2
                  text-center
                  text-xl
                  font-semibold
                  text-blue-950
                  outline-none
                  transition
                  focus:border-blue-600
                  focus:bg-white
                  focus:outline-2
                  focus:outline-blue-600/30
                "
                type="text"
                value={draftData.name}
                onChange={(event) =>
                  handleFieldChange("name", event.target.value)
                }
              />
            ) : (
              <p className="text-2xl font-bold text-blue-900">
                {displayData.name}
              </p>
            )}
          </div>

          <hr className="border-0 border-t border-blue-100" />

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Contact information
            </h2>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-blue-400">Email</span>

              <p className="text-base text-blue-950/80">{userData.email}</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-sm font-semibold text-blue-400"
                htmlFor="profile-phone"
              >
                Phone number
              </label>

              {isEditMode ? (
                <input
                  id="profile-phone"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-blue-200
                    bg-blue-50
                    px-3
                    py-2
                    text-base
                    text-blue-950
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:bg-white
                    focus:outline-2
                    focus:outline-blue-600/30
                  "
                  type="tel"
                  value={draftData.phone}
                  onChange={(event) =>
                    handleFieldChange("phone", event.target.value)
                  }
                />
              ) : (
                <p className="text-base text-blue-950/80">
                  {displayData.phone}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-blue-400">
                Address
              </span>

              {isEditMode ? (
                <div className="flex flex-col gap-2">
                  <input
                    className="
                      w-full
                      rounded-lg
                      border
                      border-blue-200
                      bg-blue-50
                      px-3
                      py-2
                      text-base
                      text-blue-950
                      outline-none
                      transition
                      focus:border-blue-600
                      focus:bg-white
                      focus:outline-2
                      focus:outline-blue-600/30
                    "
                    type="text"
                    placeholder="Address line 1"
                    aria-label="Address line 1"
                    value={draftData.address?.line1 || ""}
                    onChange={(event) =>
                      handleAddressChange("line1", event.target.value)
                    }
                  />

                  <input
                    className="
                      w-full
                      rounded-lg
                      border
                      border-blue-200
                      bg-blue-50
                      px-3
                      py-2
                      text-base
                      text-blue-950
                      outline-none
                      transition
                      focus:border-blue-600
                      focus:bg-white
                      focus:outline-2
                      focus:outline-blue-600/30
                    "
                    type="text"
                    placeholder="Address line 2"
                    aria-label="Address line 2"
                    value={draftData.address?.line2 || ""}
                    onChange={(event) =>
                      handleAddressChange("line2", event.target.value)
                    }
                  />
                </div>
              ) : (
                <p className="text-base leading-6 text-blue-950/80">
                  {displayData.address?.line1}

                  {displayData.address?.line2 && (
                    <>
                      <br />
                      {displayData.address.line2}
                    </>
                  )}
                </p>
              )}
            </div>
          </div>

          <hr className="border-0 border-t border-blue-100" />

          {/* Basic Information */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Basic information
            </h2>

            {/* Gender */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-sm font-semibold text-blue-400"
                htmlFor="profile-gender"
              >
                Gender
              </label>

              {isEditMode ? (
                <select
                  id="profile-gender"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-blue-200
                    bg-blue-50
                    px-3
                    py-2
                    text-base
                    text-blue-950
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:bg-white
                    focus:outline-2
                    focus:outline-blue-600/30
                  "
                  value={draftData.gender}
                  onChange={(event) =>
                    handleFieldChange("gender", event.target.value)
                  }
                >
                  <option value="Not Selected">Not Selected</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="text-base text-blue-950/80">
                  {displayData.gender}
                </p>
              )}
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-sm font-semibold text-blue-400"
                htmlFor="profile-dob"
              >
                Date of birth
              </label>

              {isEditMode ? (
                <input
                  id="profile-dob"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-blue-200
                    bg-blue-50
                    px-3
                    py-2
                    text-base
                    text-blue-950
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:bg-white
                    focus:outline-2
                    focus:outline-blue-600/30
                  "
                  type="date"
                  value={draftData.dob}
                  onChange={(event) =>
                    handleFieldChange("dob", event.target.value)
                  }
                />
              ) : (
                <p className="text-base text-blue-950/80">{displayData.dob}</p>
              )}
            </div>
          </div>
        </fieldset>

        {/* Actions */}
        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-3
            max-sm:flex-col
          "
        >
          {isEditMode ? (
            <>
              <button
                type="button"
                className="
                  rounded-full
                  bg-linear-to-br
                  from-blue-600
                  to-blue-900
                  px-7
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-900/20
                  transition
                  hover:-translate-y-px
                  hover:brightness-105
                  focus-visible:outline-2
                  focus-visible:outline-blue-600
                  focus-visible:outline-offset-2
                  max-sm:w-full
                "
                onClick={handleSave}
              >
                Save changes
              </button>

              <button
                type="button"
                className="
                  rounded-full
                  border
                  border-blue-200
                  bg-white
                  px-7
                  py-2.5
                  text-sm
                  font-semibold
                  text-blue-600
                  transition
                  hover:bg-blue-50
                  focus-visible:outline-2
                  focus-visible:outline-blue-600
                  focus-visible:outline-offset-2
                  max-sm:w-full
                "
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              type="button"
              className="
                rounded-full
                bg-linear-to-br
                from-blue-600
                to-blue-900
                px-7
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-900/20
                transition
                hover:-translate-y-px
                hover:brightness-105
                focus-visible:outline-2
                focus-visible:outline-blue-600
                focus-visible:outline-offset-2
                max-sm:w-full
              "
              onClick={handleEdit}
            >
              Edit profile
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;

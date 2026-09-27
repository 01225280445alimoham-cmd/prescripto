import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = () => {
  const [token, setToken] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const profileRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }

      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "HOME", end: true },
    { path: "/doctors", label: "ALL DOCTORS" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <header
      className="
        flex
        items-center
        justify-between
        border-b
        border-gray-200
        bg-white
        py-4
        max-[992px]:px-6
        max-[830px]:px-4
        max-[830px]:py-3
        max-[400px]:px-3
        max-[400px]:py-2.5
      "
    >
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        className="
          h-10
          cursor-pointer
          max-[830px]:h-8
          max-[400px]:h-7
        "
      />

      {/* Desktop Navigation */}
      <nav className="max-[830px]:hidden">
        <ul className="m-0 flex list-none items-center gap-5 p-0 max-[992px]:gap-4">
          {navLinks.map((link) => (
            <li key={link.path} className="relative">
              <NavLink
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `
                    relative
                    flex
                    flex-col
                    items-center
                    gap-1
                    text-xl
                    font-bold
                    no-underline
                    transition-colors
                    duration-200
                    max-[992px]:text-base
                    ${
                      isActive
                        ? "text-gray-800 after:absolute after:-bottom-1 after:left-[10%] after:h-0.5 after:w-[80%] after:bg-blue-600"
                        : "text-gray-600"
                    }
                  `
                }
              >
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Actions */}
      <div
        className="
          flex
          items-center
          gap-4
          max-[830px]:gap-3
          max-[400px]:gap-2
        "
      >
        {/* Mobile Hamburger */}
        <div className="relative hidden max-[830px]:block" ref={menuRef}>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="
              flex
              flex-col
              justify-center
              gap-1.25
              border-0
              bg-transparent
              p-2
              cursor-pointer
            "
          >
            <span className="h-0.5 w-6 rounded-sm bg-gray-800 transition-transform duration-200" />
            <span className="h-0.5 w-6 rounded-sm bg-gray-800 transition-transform duration-200" />
            <span className="h-0.5 w-6 rounded-sm bg-gray-800 transition-transform duration-200" />
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul
              className="
                absolute
                right-0
                top-[calc(100%+8px)]
                z-20
                m-0
                min-w-45
                list-none
                rounded-lg
                border
                border-gray-200
                bg-white
                py-2
                shadow-[0_4px_12px_rgba(0,0,0,0.08)]
              "
            >
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.end}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                        block
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        no-underline
                        transition-all
                        duration-200
                        hover:scale-[1.02]
                        ${
                          isActive
                            ? "bg-gray-100 text-blue-600"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                        }
                      `
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>

        {token ? (
          /* Profile */
          <div className="relative" ref={profileRef}>
            <div
              className="
                flex
                w-fit
                cursor-pointer
                items-center
                gap-2
                after:ml-1
                after:inline-block
                after:scale-x-[1.6]
                after:text-xl
                after:leading-none
                after:text-gray-600
                after:content-['⌄']
                after:transition-transform
                after:duration-200
                hover:after:translate-y-0.5
                max-[830px]:after:text-base
              "
              onClick={() => setIsProfileOpen((prev) => !prev)}
            >
              <img
                src={assets.profile_pic}
                alt="User"
                className="
                  h-10
                  w-10
                  rounded-full
                  object-cover
                  max-[830px]:h-8
                  max-[830px]:w-8
                  max-[400px]:h-7
                  max-[400px]:w-7
                "
              />
            </div>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <ul
                className="
                  absolute
                  right-0
                  top-[calc(100%+8px)]
                  z-10
                  m-0
                  min-w-40
                  list-none
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  py-2
                  shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                  max-[830px]:min-w-37.5
                  max-[400px]:-right-2
                  max-[400px]:min-w-32.5
                "
              >
                <li>
                  <a
                    href="/profile"
                    className="
                      block
                      px-4
                      py-2
                      text-sm
                      text-gray-600
                      no-underline
                      transition-all
                      duration-200
                      hover:scale-[1.02]
                      hover:bg-gray-100
                      hover:text-gray-800
                      max-[400px]:px-3
                      max-[400px]:py-1.5
                      max-[400px]:text-[13px]
                    "
                  >
                    Profile
                  </a>
                </li>

                <li>
                  <a
                    href="/my-appoiments"
                    className="
                      block
                      px-4
                      py-2
                      text-sm
                      text-gray-600
                      no-underline
                      transition-all
                      duration-200
                      hover:scale-[1.02]
                      hover:bg-gray-100
                      hover:text-gray-800
                      max-[400px]:px-3
                      max-[400px]:py-1.5
                      max-[400px]:text-[13px]
                    "
                  >
                    My Appointments
                  </a>
                </li>

                <li>
                  <a
                    href="/logout"
                    className="
                      block
                      px-4
                      py-2
                      text-sm
                      text-gray-600
                      no-underline
                      transition-all
                      duration-200
                      hover:scale-[1.02]
                      hover:bg-gray-100
                      hover:text-gray-800
                      max-[400px]:px-3
                      max-[400px]:py-1.5
                      max-[400px]:text-[13px]
                    "
                  >
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="
              cursor-pointer
              rounded-full
              border-0
              bg-blue-600
              px-6
              py-2.5
              text-sm
              font-medium
              text-white
              transition-colors
              duration-200
              hover:bg-blue-700
              max-[830px]:px-3
              max-[830px]:py-1.5
              max-[830px]:text-xs
              max-[400px]:px-2.5
              max-[400px]:text-[11px]
            "
          >
            Create Account
          </button>
        )}
      </div>
    </header>
  );
};

export default NavBar;

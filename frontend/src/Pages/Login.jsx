import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState("Sign Up");

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-white text-slate-700"
      dir="ltr"
    >
      <main className="flex w-full items-center justify-center px-4 py-7 sm:px-6 sm:py-10">
        <div className="w-full max-w-120">
          {/* Header */}
          <header className="mb-10">
            <h2 className="m-0 mb-2.5 text-3xl sm:text-[30px] font-bold text-blue-600">
              {currentState}
            </h2>

            <p className="m-0 text-sm leading-6 text-slate-500">
              {currentState === "Login"
                ? "Welcome back. Please login to your account."
                : "Create your account and get started."}
            </p>
          </header>

          {/* Form */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Name */}
            {currentState !== "Login" && (
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  className="peer w-full border-0 border-b border-slate-300 bg-transparent px-1 pb-2.5 pt-3.5 text-[15px] text-slate-700 outline-none transition-colors duration-200 focus:border-blue-600"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange("name")}
                  autoComplete="name"
                  required
                />

                <label
                  htmlFor="name"
                  className="pointer-events-none absolute left-1 top-3.5 text-[15px] text-slate-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-[11px] peer-focus:tracking-wider peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:text-blue-600"
                >
                  Name
                </label>
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <input
                id="email"
                type="email"
                className="peer w-full border-0 border-b border-slate-300 bg-transparent px-1 pb-2.5 pt-3.5 text-[15px] text-slate-700 outline-none transition-colors duration-200 focus:border-blue-600"
                placeholder=" "
                value={formData.email}
                onChange={handleChange("email")}
                autoComplete="email"
                required
              />

              <label
                htmlFor="email"
                className="pointer-events-none absolute left-1 top-3.5 text-[15px] text-slate-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-[11px] peer-focus:tracking-wider peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:text-blue-600"
              >
                Email address
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="peer w-full border-0 border-b border-slate-300 bg-transparent px-1 pb-2.5 pt-3.5 pr-12 text-[15px] text-slate-700 outline-none transition-colors duration-200 focus:border-blue-600"
                placeholder=" "
                value={formData.password}
                onChange={handleChange("password")}
                autoComplete={
                  currentState === "Login" ? "current-password" : "new-password"
                }
                required
              />

              <label
                htmlFor="password"
                className="pointer-events-none absolute left-1 top-3.5 text-[15px] text-slate-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-[11px] peer-focus:tracking-wider peer-focus:text-blue-600 peer-not-placeholder-shown:text-[11px] peer-not-placeholder-shown:tracking-wider peer-not-placeholder-shown:text-blue-600"
              >
                Password
              </label>

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-0 top-3 cursor-pointer border-0 bg-transparent p-1 text-xs text-slate-500 transition-colors duration-200 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Remember / Forgot */}
            <div className="-mt-1.5 flex items-center justify-between gap-4 text-[13px]">
              <label className="flex cursor-pointer select-none items-center gap-2 text-slate-700">
                <input
                  type="checkbox"
                  className="h-3.75 w-3.75 cursor-pointer accent-blue-600"
                />

                <span>Remember me</span>
              </label>

              <a
                href="#forgot"
                className="border-b border-transparent text-slate-500 no-underline transition-colors duration-200 hover:border-blue-600 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 w-full cursor-pointer rounded-sm border border-blue-600 bg-blue-600 px-4 py-3.75 text-[15px] font-bold tracking-wide text-white transition-all duration-200 hover:border-blue-700 hover:bg-blue-700 active:translate-y-px focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
            >
              {currentState}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-7 text-center text-[13px] text-slate-500">
            {currentState === "Login" ? (
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setCurrentState("Sign Up")}
                  className="cursor-pointer border-0 border-b border-blue-600 bg-transparent p-0 font-bold text-blue-600 transition-colors duration-200 hover:border-blue-700 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                >
                  Create one
                </button>
              </p>
            ) : (
              <p>
                Do you have an account?{" "}
                <button
                  type="button"
                  onClick={() => setCurrentState("Login")}
                  className="cursor-pointer border-0 border-b border-blue-600 bg-transparent p-0 font-bold text-blue-600 transition-colors duration-200 hover:border-blue-700 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;

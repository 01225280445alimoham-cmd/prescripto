import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Doctors from "./Pages/Doctors.jsx";
import Appoiment from "./Pages/Appoiment.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./Pages/Login.jsx";
import Profile from "./Pages/Profile.jsx";
import MyAppoiment from "./Pages/MyAppoiment.jsx";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:specialty" element={<Doctors />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment/:docId" element={<Appoiment />} />
        <Route path="/about/" element={<AboutUs />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/my-appoiments/" element={<MyAppoiment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

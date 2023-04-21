import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components//Home/Home";
import Detail from "./components/Detail/Detail";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
import style from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Created from "./components/CreateVideogame/Created/Created";
import { useState } from "react";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={pathname === "/" ? style.landingPage : style.home}>
      {pathname === "/" ? "" : <NavBar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/createVideogame" element={<CreateVideogame />} />
        <Route path="/searchResults" element={<Home />} />
        <Route path="/created" element={<Created />} />
      </Routes>
      {pathname === "/" ? "" : <Footer />}
    </div>
  );
}

export default App;

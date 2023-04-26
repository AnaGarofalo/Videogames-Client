import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components//Home/Home";
import Detail from "./components/Detail/Detail";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
import style from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Message from "./components/Home/Message/Message";
import UpdateGame from "./components/UpdateGame/UpdateGame";

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
        <Route path="/update/:id" element={<UpdateGame />} />
        <Route path="/searchResults" element={<Home />} />
        <Route path="/created" element={<Message />} />
        <Route path="/updated" element={<Message />} />
        <Route path="/deleted" element={<Message />} />
        <Route path="/noResults" element={<Message />} />
      </Routes>
      {pathname === "/" ? "" : <Footer />}
    </div>
  );
}

export default App;

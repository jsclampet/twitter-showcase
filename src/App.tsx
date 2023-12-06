import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Showcase from "./pages/Showcase/Showcase";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const App = () => {
  return (
    <div className="main-container">
      <nav className="nav-bar">
        <Link to="/home" style={{ textDecoration: "none", fontSize: 24 }}>
          <div className="nav-icon">
            <FaHome />
          </div>
          <p>Home</p>
        </Link>
        <Link to="/search" style={{ textDecoration: "none", fontSize: 24 }}>
          <div className="nav-icon">
            <FaSearch />
          </div>

          <p>Search</p>
        </Link>
        <Link to="/showcase" style={{ textDecoration: "none", fontSize: 24 }}>
          <div className="nav-icon">
            <FaStar />
          </div>
          <p>Showcase</p>
        </Link>
      </nav>

      <h1>Twitter Showcase!</h1>

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </div>
  );
};

export default App;

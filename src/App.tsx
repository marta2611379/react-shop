import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import About from "./About/About";

function App() {
  return (
    <Router>
      <nav className="navbar sticky-top navbar-light bg-light ">
        <Link className="nav-item nav-link" to="/">
          Home
        </Link>
        <Link className="nav-item nav-link" to="/cart">
          Cart
        </Link>
        <Link className="nav-item nav-link" to="/about">
          About
        </Link>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

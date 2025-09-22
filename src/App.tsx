import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";  
import { useCart } from "./context/CartContext";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";

function App() {
  const { state } = useCart();

  return (
    <Router>
      <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex items-center">
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-gray font-medium hover:text-orange transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray font-medium hover:text-orange transition"
          >
            About
          </Link>
        </div>
        <Link
          to="/cart"
          className="ml-auto bg-orange text-white text-sm font-semibold px-3 py-1 rounded-full"
        >
          <span>
            {state.items
              .map((item) => item.quantity)
              .reduce((a, b) => a + b, 0)}
          </span>
        </Link>
      </nav>

      <div className="container mx-auto px-6 py-6">
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

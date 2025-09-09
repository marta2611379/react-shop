import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import { useCart } from "./context/CartContext";

function App() {
  const { state } = useCart();

  return (
    <Router>
      <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex items-center">
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-orange-500 transition"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 font-medium hover:text-orange-500 transition"
          >
            Cart
          </Link>
          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-orange-500 transition"
          >
            About
          </Link>
        </div>

        <span className="ml-auto bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
          {state.items.map((item) => item.quantity).reduce((a, b) => a + b, 0)}{" "}
          items
        </span>
      </nav>

      {/* Контент */}
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

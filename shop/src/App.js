import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Contact from "./pages/Contact";
import Item from "./pages/Item";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item/:itemId" element={<Item />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />

      </Routes>
    </div>
  );
}

export default App;

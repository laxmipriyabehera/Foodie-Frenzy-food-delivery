import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/menu" element={<Menu />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
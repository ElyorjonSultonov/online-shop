import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import { Routes, Route, Router } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Purchase from "./pages/Purchase/Purchase";
import Footer from "./Components/Footer/Footer";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
// import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

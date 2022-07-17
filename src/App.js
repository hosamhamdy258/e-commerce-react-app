import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/productsSlice";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import { getCart } from "./store/cartSlice";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productsSlice);
  // console.log(state.products);

  useEffect(() => {
    dispatch(getCart());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home productList={state.products} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

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

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productsSlice);
  console.log(state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      {/* {state.products &&
        state.products.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })} */}

      <Routes>
        <Route path="/" element={<Home productList={state.products} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products productList={state.products}/>} />
        <Route path="/Products/Smartphones" element={<Products productList={(state.products).filter(function (item) {return item.category ==='smartphones';})}/>} />
        <Route path="/products/Laptops" element={<Products productList={(state.products).filter(function (item) {return item.category ==='laptops';})}/>} />
        <Route path="/Products/Skincare" element={<Products productList={(state.products).filter(function (item) {return item.category ==='skincare';})}/>} />
        <Route path="/Products/Groceries" element={<Products productList={(state.products).filter(function (item) {return item.category ==='groceries';})}/>} />
        <Route path="/Products/Home-Decoration" element={<Products productList={(state.products).filter(function (item) {return item.category ==='home-decoration';})}/>} />
        <Route path="/Products/Fragrances" element={<Products productList={(state.products).filter(function (item) {return item.category ==='fragrances';})}/>} />

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

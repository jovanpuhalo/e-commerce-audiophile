import { Navigate, Route, Routes } from "react-router";
import { getProducts } from "./firebase/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "./component/Helper/ScrollToTop";
import Layout from "./component/layout/layout";
import HeadphonesPage from "./Pages/HeadphonesPage";
import HomePage from "./Pages/HomePage";
import SpeakersPage from "./Pages/SpeakersPage";
import EarphonesPage from "./Pages/EarphonesPage";
import ProductPage from "./Pages/ProductPage";

import { productsActions } from "./store/products-slice";
import { cartActions } from "./store/cart-slice";
import CheckoutPage from "./Pages/CheckoutPage";

function App() {
  console.log("appppp");
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const fetchData = useCallback(async () => {
    // const response = await fetch("https://audiophile-api.herokuapp.com/products");
    // if (response.ok) {
    //   const data = await response.json();
    //   dispatch(productsActions.setAllProducts(data));
    // }
    const res = await getProducts();
    dispatch(productsActions.setAllProducts(res));
  }, [dispatch]);

  useEffect(() => {
    fetchData();
    dispatch(cartActions.initCart());
  }, [dispatch, fetchData]);

  return (
    <Layout>
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/checkout"
          element={
            cartProducts.length ? (
              <CheckoutPage />
            ) : (
              <>
                <Navigate to="/" />
              </>
            )
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/Home";
import Wishlist from "./Wishlist/Wishlist";
import Profile from "./Profile/profile";
import Setting from "pages/Dashboard/settings/setting";
import AdForm from "./CRUD/createAds";
import ManageAds from "./CRUD/manageAds";
import Menu from "./AdsRoutes/urlCategory";
import Product from "./Product/Product";
import Checkout from "./Checkout/CheckoutPage";
import Cart from "./Cart/Cart";


export default function Frontend() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/profile/:uid" element={<Profile />} />
      <Route path="/all/:category" element={<Menu />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/editProfile/info" element={<Setting />} />
      <Route path="/createAd" element={<AdForm />} />
      <Route path="/manageAds" element={<ManageAds />} />
      <Route path="*" element="<h1>404 Not found</h1>" />
    </Routes>
  );
}

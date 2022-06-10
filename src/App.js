import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CoffeeShopPage from "./pages/CoffeeShopPage/CoffeeShopPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";
import CoffeeShopForm from "./components/CoffeeShopForm/CoffeeShopForm";

function App() {
  return (
    <>
      <Header />
      <CoffeeShopForm />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/coffeeshops" element={<CoffeeShopPage />} />
      </Routes>
    </>
  );
}

export default App;

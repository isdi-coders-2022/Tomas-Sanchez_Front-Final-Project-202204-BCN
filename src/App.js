import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CoffeeShopPage from "./pages/CoffeeShopPage/CoffeeShopPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";
import LoggedControl from "./components/LoggedControl/LoggedControl";
import CoffeeShopFormPage from "./pages/CoffeeShopFormPage/CoffeeShopFormPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/coffeeshops"
          element={
            <LoggedControl>
              <Header />
              <CoffeeShopPage />
            </LoggedControl>
          }
        />
        <Route
          path="/add-new-coffeeshops"
          element={
            <LoggedControl>
              <CoffeeShopFormPage />
            </LoggedControl>
          }
        />
      </Routes>
    </>
  );
}

export default App;

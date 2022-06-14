import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CoffeeShopPage from "./pages/CoffeeShopPage/CoffeeShopPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";
import LoggedControl from "./components/LoggedControl/LoggedControl";
import CoffeeShopFormPage from "./pages/CoffeeShopFormPage/CoffeeShopFormPage";
import { useSelector } from "react-redux";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import EditCoffeeShopFormPage from "./pages/EditCoffeeShopFormPage/EditCoffeeShopFormPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { loaded } = useSelector(({ ui }) => ui);

  return (
    <>
      {loaded && <LoadingPage />}

      <Routes>
        <Route path="/" element={<Navigate to="/coffeeshops" />} />
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
          path="/add-new-coffeeshops/:id"
          element={
            <LoggedControl>
              <EditCoffeeShopFormPage />
            </LoggedControl>
          }
        />
        <Route
          path="/add-new-coffeeshops/"
          element={
            <LoggedControl>
              <CoffeeShopFormPage />
            </LoggedControl>
          }
        />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

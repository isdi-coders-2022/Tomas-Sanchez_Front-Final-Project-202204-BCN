import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CoffeeShopPage from "./pages/CoffeeShopPage/CoffeeShopPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Header from "./components/Header/Header";
import LoggedControl from "./components/LoggedControl/LoggedControl";
import { useSelector } from "react-redux";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EditCoffeeShopFormPage from "./pages/FormPage/EditCoffeeShopFormPage/EditCoffeeShopFormPage";
import CoffeeShopFormPage from "./pages/FormPage/CoffeeShopFormPage/CoffeeShopFormPage";

function App() {
  const { loaded } = useSelector(({ ui }) => ui);

  return (
    <>
      {loaded && <LoadingPage />}

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
          path="/edit-new-coffeeshops/:id"
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

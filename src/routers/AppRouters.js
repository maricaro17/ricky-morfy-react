import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import { auth } from "../firebase/FirebaseConfig";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { login } from "../redux/actions/authAction";
import { PrivateRouter } from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      }
    })
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />
          <Route
            path="/registro"
            element={
              <PublicRouter>
                <Register />
              </PublicRouter>
            }
          />
          <Route
            path="/detalle/:id"
            element={
              <PrivateRouter>
                <Details />
              </PrivateRouter>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRouter>
                <Home />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouters;

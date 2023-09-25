import React from "react";
import { Route, Routes as ReactRouterDom } from "react-router-dom";
import Home from "../pages/home/Home";
import CasinoVivo from "../pages/casinosvivo/CasinosVivo";
import Deportes from "../pages/deportes/Deportes";
import Slots from "../pages/slots/Slots";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

import PageNotFound from "../pages/pagenotfound/PageNotFound";
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import ProtectedRoute from "../components/protectedroute/ProtectedRoute";

const Routes = () => {
  return (
    <>
      <ReactRouterDom>
        <Route path="/" element={<Home />} />
        <Route path="/casino" element={<CasinoVivo />} />
        <Route path="/deportes" element={<Deportes />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route
          path="/checkout"
          element={<ProtectedRoute redirectTo="/login"></ProtectedRoute>}
        />

        <Route path="*" element={<PageNotFound />} />
      </ReactRouterDom>
    </>
  );
};

export default Routes;

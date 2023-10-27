import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/web/Header";
import DashHome from "./components/dash/DashHome";
import Home from "./pages/Home";

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard-a" element={<Header />} />
            <Route path="/dashboard-b" element={<DashHome />} />
        </Routes>
    );
};

export default AppRouter;
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/web/Header";
import DashHome from "./components/dash/DashHome";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import LoginPage from "./pages/Login";
import Main from "./components/dash/Main";

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard-a" element={<Header />} />
            <Route path="/dashboard-b" element={<DashHome />} >
                <Route index element={<Main />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
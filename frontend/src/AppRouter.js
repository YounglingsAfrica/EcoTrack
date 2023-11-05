import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Header from "./components/web/Header";
import DashHome from "./components/dash/DashHome";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import LoginPage from "./pages/Login";
import Reset from "./components/auth/ResetPassword";
import Forgot from "./components/auth/ForgotPassword";
import Logout from "./components/auth/Logout";
// import Main from "./components/dash/Main";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const AppRouter = () => {
    return(
        <>
        <Toaster position="bottom-right" toastOptions={{duration: 2000}} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Registration />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/reset/:id/:token" element={<Reset />} />
                <Route path="/dashboard-a" element={<Header />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/dashboard-b" element={<DashHome />} >
                    {/* <Route index element={<Main />} /> */}
                </Route>
        </Routes>
        </>
    );
};

export default AppRouter;
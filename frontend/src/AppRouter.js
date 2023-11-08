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
import Disposal from "./components/dash/Disposal";
// import Main from "./components/dash/Main";
import Logout from "./components/auth/Logout";
import ConfirmEmail from "./components/auth/ConfirmEmail";
import ProtectedRoute from "./components/auth/ProtectedRoute";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.withCredentials = true;

const AppRouter = () => {
    return(
        <>
            <Toaster 
                position="top-right" 
                toastOptions={{
                    duration: 4000, 
                    style: {
                        background: "#000",
                        color: "#2ECC40",
                        border: "#fff"
                    }
                }} 
            />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Registration />} />
                    <Route path="/confirm/:id/:token" element={<ConfirmEmail />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/forgot" element={<Forgot />} />
                    <Route path="/reset/:id/:token" element={<Reset />} />
                    <Route path="/dashboard-a" element={<Header />} />
                    <Route path="/dashboard-b/*" element={
                        <ProtectedRoute>
                            <Routes>
                                <Route index element={<DashHome />} />
                                <Route path="logout" element={<Logout />} />
                                {/* <Route path="disposal" element={<Disposal />} /> */}
                            </Routes>
                        </ProtectedRoute>
                    }/>
                    <Route path="disposal" element={<Disposal />} />
                </Routes>
        </>
    );
};

export default AppRouter;
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
import Logout from "./components/auth/Logout";
import ConfirmEmail from "./components/auth/ConfirmEmail";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserProfile from "./components/dash/UserProfile";
import FeedbackHome from "./components/dash/FeedbackHome";
import RecycleHome from "./components/dash/RecycleHome";
import RegulationsHome from "./components/dash/RegulationsHome";
import Addresses from "./components/dash/Addresses";
import RequestPickupHome from "./components/dash/RequestPickupHome";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.withCredentials = true;

const AppRouter = () => {
    return(
        <>
            <Toaster 
                position="top-center" 
                toastOptions={{
                    duration: 4000, 
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
                            <Route path="disposal" element={<Disposal />} />
                            <Route path="user-profile/*" element={
                                <Routes>
                                    <Route index element={< UserProfile/>}/>
                                    <Route path="addresses" element={<Addresses />} />
                                </Routes>
                            }/>
                            <Route path="feedback" element={<FeedbackHome />} />
                            <Route path="recycling" element={<RecycleHome />} />
                            <Route path="regulations" element={<RegulationsHome />} />
                        </Routes>
                    </ProtectedRoute>
                }/>
                <Route path="/request-pickup" element={<RequestPickupHome />} />
            </Routes>
        </>
    );
};

export default AppRouter;
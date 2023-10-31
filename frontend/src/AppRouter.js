import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Header from "./components/web/Header";
import DashHome from "./components/dash/DashHome";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import LoginPage from "./pages/Login";
import Main from "./components/dash/Main";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const AppRouter = () => {
    return(
<<<<<<< Updated upstream
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard-a" element={<Header />} />
            <Route path="/dashboard-b" element={<DashHome />} >
                <Route index element={<Main />} />
            </Route>
        </Routes>
=======
        <>
        <Toaster position="bottom-right" toastOptions={{duration: 2000}} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Registration />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard-a" element={<Header />} />
                <Route path="/dashboard-b" element={<DashHome />} />
            </Routes>
        </>
>>>>>>> Stashed changes
    );
};

export default AppRouter;
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/web/Header";
import DashHome from "./components/dash/DashHome";

const AppRouter = () => {
    return(
            <Routes>
                <Route exact path="/dashboard-a" component={Header} />
                <Route exact path="/dashboard-b" component={DashHome} />
            </Routes>
    );
};

export default AppRouter;
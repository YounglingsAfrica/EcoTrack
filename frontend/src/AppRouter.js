import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./components/web/Header";
import DashHome from "./components/dash/DashHome";

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/dashboard-a" component={Header} />
                <Route exact path="/dashboard-b" component={DashHome} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
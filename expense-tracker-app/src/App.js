import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GroupListPage from "./pages/GroupListPage";
import ListPage from "./pages/ListPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/listPage">
            <ListPage />
          </Route>
          <Route path="/groupListPage">
            <GroupListPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

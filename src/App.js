import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from "./wrapper/Layout";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/dashboard'>
            <Layout>
              <Dashboard />
            </Layout>
          </Route>
          <Route path='/profile'>
            <Layout>
              <Profile />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

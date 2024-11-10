import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login";
import { AuthContext } from "./context/auth";
import "./App.scss";
import Main from "./pages/Main";

function App() {
  const existingUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(existingUser);

  const setUserData = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, setUser: setUserData }}>
      <Router>
        <div className="app">
          <main>
            <PrivateRoute path="/" component={Main} />
            <Route exact path="/login" component={Login} />
          </main>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

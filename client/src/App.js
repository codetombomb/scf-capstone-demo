// client/src/components/App.js
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import Home from "./components/Home/Home";
import Icon from "./components/Icon/Icon";
import { UserContext } from "./context/UserProvider";

import "./App.css";

function App() {

  return (
      <div className="App">
        <Icon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
  );
}

export default App;

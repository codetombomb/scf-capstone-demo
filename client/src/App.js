// client/src/components/App.js
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import Home from "./components/Home/Home";
import "./App.css";
import Icon from "./components/Icon/Icon";
import { UserContext } from "./context/UserContext";
import Button from "./components/Button/Button";

function App() {
  const { onUserLogin, errors, user } = useContext(UserContext);
  // console.log(errors)

  return (
    <div className="App">
      <Icon />
      {errors.map((err) => <div key={err}>{err}</div>)}
      {/* [{}, {}, {}] */}
      {/* {[<div key={1}>Hello 1</div>,<div key={2}>Hello 2</div>,<div>Hello 3</div> ]} */}

      {user.username === "" ? null : <Button
        label="Logout"
        handler={() => fetch("/logout", { method: "DELETE" })}
      />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login handleUserLogin={onUserLogin} />}
        />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import Home from "./components/Home/Home"

function App() {
  const [user, setUser] = useState({username: 'tombomb'});

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => console.log(user));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
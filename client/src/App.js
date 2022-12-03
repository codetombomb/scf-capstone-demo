// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import Home from "./components/Home/Home";
import "./App.css";
import Icon from "./components/Icon/Icon";

function App() {
  const [user, setUser] = useState({username: ""});
  const [deliveries, setDeliveries] = useState([])
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate()

  const fetchDeliveries = () => {
    fetch("/deliveries").then((resp) => {
      if (resp.ok) {
        resp.json().then((deliveries) => {
          setDeliveries([...deliveries])
          navigate("/")
        });
      } else {
        resp.json().then(({errors}) => {
          setErrors([...errors])
        });
      }
    });
  }

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser({ ...user })
          fetchDeliveries()
        });
      } else {
        resp.json().then(({errors}) => {
          setErrors([...errors])
        navigate("/login")
        });
      }
    });
  }, []);

  

  const onUserLogin = (credentials) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    }
    fetch("/login", config)
      .then(resp => {
        if(resp.ok){
          resp.json().then(user => {
            setUser({...user})
            navigate("/")
          })
        } else {
          resp.json().then(({errors}) => {
            setErrors([...errors])
          })
        }
      })
  };

  return (
      <div className="App">
        <Icon />
        <Routes>
          <Route path="/" element={<Home user={user} deliveries={deliveries}/>} />
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

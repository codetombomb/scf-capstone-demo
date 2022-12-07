import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "" });
  const [deliveries, setDeliveries] = useState([]);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const fetchDeliveries = () => {
    fetch("/deliveries").then((resp) => {
      if (resp.ok) {
        resp.json().then((deliveries) => {
          setDeliveries([...deliveries]);
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([...errors]);
        });
      }
    });
  };

  const onUserLogin = (credentials) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    };
    fetch("/login", config).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser({ ...user });
          fetchDeliveries();
          navigate("/");
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([...errors]);
          setTimeout(() => setErrors([]), 3000)
        });
      }
    });
  };

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser({ ...user });
          fetchDeliveries();
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([...errors]);
          navigate("/login");
        });
      }
    });
  }, [navigate]);

  return (
    <UserContext.Provider
      value={{ user, setUser, errors, setErrors, deliveries, onUserLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

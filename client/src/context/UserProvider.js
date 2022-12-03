import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "" });
  const [deliveries, setDeliveries] = useState([]);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate()

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
  }, []);

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
          fetchDeliveries()
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([...errors]);
        });
      }
    });
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, deliveries, setDeliveries, errors, setErrors, onUserLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

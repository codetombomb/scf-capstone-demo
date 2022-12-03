import { useState, useContext } from "react";
import { UserContext } from "../../../context/UserProvider";

import Button from "../../Button/Button";
import Input from "../../Input/Input";
import './Login.css'

function Login() {
  const { onUserLogin } = useContext(UserContext)
  const [show, setShow] = useState("email");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleEnterEmailSubmit = () => {
    setShow("password");
  };

  const handleLoginSubmit = () => {
    onUserLogin(credentials);
  };

  const onInputChange = ({ target }) => {
    const credentialsCopy = { ...credentials };
    credentialsCopy[target.name] = target.value;
    setCredentials(credentialsCopy);
  };

  return (
    <div className="login-form">
      {show === "email" ? (
        <p>What is your email?</p>
      ) : (
        <p>Please enter your password.</p>
      )}
      <Input
        inputType={show}
        name={show}
        handleInputChange={onInputChange}
        inputValue={credentials[show]}
      />
      <Button
        label="continue"
        handler={show === "email" ? handleEnterEmailSubmit : handleLoginSubmit}
      />
      {show === "email" ? null : <Button small={true} label="back" handler={() => setShow("email")} />}
    </div>
  );
}
export default Login;

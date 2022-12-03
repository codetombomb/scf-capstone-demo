import { useState } from "react";

import Button from "../../Button/Button";
import Input from "../../Input/Input";
import './Login.css'

function Login({ handleUserLogin }) {
  const [show, setShow] = useState("email");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleEnterEmailSubmit = () => {
    setShow("password");
  };

  const handleLoginSubmit = () => {
    handleUserLogin(credentials);
  };

  const onInputChange = ({ target }) => {
    console.log(target.value);
    const credentialsCopy = { ...credentials };
    credentialsCopy[target.name] = target.value;
    console.log(credentialsCopy);
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

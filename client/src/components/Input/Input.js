import "./Input.css";

function Input({ name, handleInputChange, inputValue, inputType }) {
  return (
    <input className="input" type={inputType} name={name} onChange={handleInputChange} value={inputValue}></input>
  );
}
export default Input;

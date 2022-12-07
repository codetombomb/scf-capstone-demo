import "./Input.css";

function Input({ name, handleInputChange, inputValue, inputType }) {
  return (
    <input className="input" type={inputType} name={name} onChange={handleInputChange} value={inputValue} required></input>
  );
}
export default Input;


<form>
  <input required></input>
  <input type="submit" required></input>
</form>
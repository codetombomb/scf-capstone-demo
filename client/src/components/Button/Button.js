import './Button.css'

function Button({label, handler, small}) {
  return (
    <button className={small ? "button-small" : "button-large"} onClick={handler}>{label}</button>
  )
}
export default Button
import React from 'react'
import "./Input.scss";
const Imput = ({ label, value, type, handleChange, placeholder }) => {
  return (
    <div className="input__container">
      <label> {label}</label>
      <input placeholder={placeholder} type={type} value={value} onChange={handleChange} />
    </div>
  )
}

export default Imput

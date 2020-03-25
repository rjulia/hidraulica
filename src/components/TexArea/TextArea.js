import React from 'react'
import "./TextArea.scss";
const TextArea = ({ label, value, row, col, handleChange, placeholder, name }) => {
  return (
    <div className="input__container">
      <label> {label}</label>
      <textarea name={name} rows={row} cols={col} placeholder={placeholder} value={value} onChange={handleChange} >
      </textarea>


    </div>
  )
}

export default TextArea
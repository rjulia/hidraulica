
import React from 'react'
import { Select } from 'react-dropdown-select'
import PropTypes from 'prop-types';
import './DropDownSelect.scss'



const DropDownSelect = ({ options, title, keyValue, handleChage }) => {

  return (
    <div className="dropdown__container">
      <label htmlFor={title}>{title}</label>
      <Select
        options={options}
        clearable={true}
        name={title}
        onChange={(values) => handleChage(values, keyValue)}
      />
    </div>
  )
}

DropDownSelect.propTypes = {
  options: PropTypes.any,
  title: PropTypes.string,

}

export default DropDownSelect

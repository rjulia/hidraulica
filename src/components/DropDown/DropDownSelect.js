import React from 'react'
import { Select } from 'react-dropdown-select'
import PropTypes from 'prop-types';
import './DropDownSelect.scss'



const DropDownSelect = ({ options, title }) => {


  const handleChage = (values) => {
    console.log(values)
  }

  return (
    <div className="dropdown__container">
      <label htmlFor={title}>{title}</label>
      <Select
        options={options}
        name={title}
        onChange={(values) => handleChage(values)}
      />
    </div>
  )
}

DropDownSelect.propTypes = {
  options: PropTypes.any,
  title: PropTypes.string,

}

export default DropDownSelect

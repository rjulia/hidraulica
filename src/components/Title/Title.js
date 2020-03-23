import React from 'react'
import './Title.scss'
import classNames from 'classnames'
const Title = ({ text, dark, small, blue }) => {

  let titleClass = classNames({
    "title__group": true,
    'dark': dark,
    'small': small,
    'blue': blue
  })

  return (
    <div className={titleClass}>
      <h2>{text}</h2>
      <span> </span>
    </div>
  )

}

export default Title

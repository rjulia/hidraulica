import React from 'react'
import './Title.scss'
import classNames from 'classnames'
const Title = ({ text, dark, small, blue, ...others }) => {

  let titleClass = classNames({
    "title__group": true,
    'dark': dark,
    'small': small,
    'blue': blue,
    ...others
  })

  return (
    <div className={titleClass}>
      <h2>{text}</h2>
      <span> </span>
    </div>
  )

}

export default Title

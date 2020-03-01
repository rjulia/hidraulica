import React from 'react'
import './Title.scss'
const Title = ({ text, dark }) => {

  console.log(dark)
  return (
    <div className={"title__group " + (dark ? 'dark' : '')}>
      <h2>{text}</h2>
      <span> </span>
    </div>
  )

}

export default Title

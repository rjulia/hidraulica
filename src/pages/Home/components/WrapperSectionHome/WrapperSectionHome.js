import React from 'react'
import './wrappersectionhome.scss';

const WrapperSectionHome = ({ children, classN }) => {
  return (
    <div className={`container__wrapper--home ${classN}`}>
      <div className="container">

        {children}
      </div>
    </div>
  )
}

export default WrapperSectionHome

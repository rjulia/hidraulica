import React from 'react'
import './wrappersectionhome.scss';

const WrapperSectionHome = ({ children, classN }) => {
  return (
    <div className={`container container__wrapper--home ${classN}`}>
      {children}
    </div>
  )
}

export default WrapperSectionHome

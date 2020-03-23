import React from 'react'
import './wrappersection.scss';

const WrapperSection = ({ children, classN }) => {
  return (
    <div className={`container__wrapper--home ${classN}`}>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default WrapperSection

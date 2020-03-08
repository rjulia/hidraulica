import React from 'react'
import classNames from 'classnames'
import './HeroImage.scss'

const HeroImages = ({ image, title, subtitle }) => {

  let btnClass = classNames({
    'hero-image__container': true,
    'high': subtitle,
  })

  return (
    <div className={btnClass}>
      <div className='hero-image__box--text'>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
      <img src={image} alt={title} />
    </div>
  )
}

export default HeroImages

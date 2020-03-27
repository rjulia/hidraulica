import React from 'react'
import classNames from 'classnames'
import './HeroImage.scss'

const HeroImages = ({ image, title, subtitle }) => {

  let heroClass = classNames({
    'hero-image__container': true,
    'high': subtitle ? true : false,
  })

  return (
    <div className={heroClass}>
      <div className='hero-image__box--text'>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
      <img src={image} alt={title} />
    </div>
  )
}

export default HeroImages

/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { getProjects } from 'services/contentful'
import { withTranslation } from 'react-i18next';
import './Carousel.scss'
import Arrow from 'assets/icons/ic_arrow_down_white.svg'

const ArrowNext = (props) => {
  const { className, style, onClick } = props;
  return (
    <span className={className} onClick={onClick}>
      <img src={Arrow} alt="" />
    </span>
  )
}

const ArrowPrev = (props) => {
  const { className, style, onClick } = props;
  return (
    <span className={className} onClick={onClick}>
      <img src={Arrow} alt="" />
    </span>
  )
}


const Carousel = ({ i18n }) => {



  const promise = getProjects(i18n.language)
  const [sliders, setSliders] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    promise.then(sliders => {
      setSliders(sliders)
      setLoading(false)
    })
  }, [])
  console.log(sliders)
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />
  };
  if (isLoading) return <p>Loading...</p>
  return (
    <div className="carousel__projects">
      <Slider {...settings} className="carousel__container">
        {sliders.map(slider => (
          <div key={slider.sys.id} className="carousel__cart">
            <figure>
              <img src={_.get(slider, 'fields.thumbnail.fields.file.url')} alt="" />
            </figure>
            <div className="carousel__box--text">
              <h4>{_.get(slider, 'fields.category')}</h4>
              <p>{_.get(slider, 'fields.title')}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default withTranslation()(Carousel)
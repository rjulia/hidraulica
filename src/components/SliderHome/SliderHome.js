import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { getHomeSlider } from '../../services/contentful'
import { withTranslation } from 'react-i18next';
import './SliderHome.scss'
const SliderHome = ({ i18n }) => {

  const promise = getHomeSlider(i18n.language)
  const [sliders, setSliders] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    promise.then(sliders => {
      setSliders(sliders)
      setLoading(false)
    })
  }, [])
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  };
  if (isLoading) return <p>Loading...</p>
  return (
    <div className="slider__container">
      <Slider {...settings}>
        {sliders.map(slider => (
          <div key={slider.sys.id}>
            <img src={slider.fields.image.fields.file.url} alt="" />
            <h2 className="title__slider">{slider.fields.title}</h2>
            <p className="subtitle__slider">{slider.fields.subtitle}</p>
            <p className="author">author: <span>{slider.fields.author}</span> de la web: <span>{slider.fields.sponsor}</span> </p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default withTranslation()(SliderHome)

import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { getHomeSlider } from '../../services/contentful'
import { withTranslation } from 'react-i18next';

const SliderHome = ({ i18n }) => {

  const promise = getHomeSlider(i18n.lng || "es-ES")
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      <h2>Fade</h2>
      <Slider {...settings}>
        {sliders.map(slider => console.log(slider))}
      </Slider>
    </div>
  )
}

export default withTranslation()(SliderHome)

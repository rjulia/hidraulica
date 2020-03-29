/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from 'react'
import Slider from "react-slick";
import './SliderHome.scss'
import PlayIcon from 'assets/icons/ic_play.svg'
import PauseIcon from 'assets/icons/ic_pause.svg'


const SliderHome = ({ sliders, home }) => {

  let mySlider = useRef();

  const [onPlay, setOnPlay] = useState(false)
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 12000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  };

  function playStop() {

    if (onPlay) {
      mySlider.slickPlay();
    } else {
      mySlider.slickPause();
    }
    setOnPlay(!onPlay)
  }

  console.log(onPlay)

  return (
    <div className="slider__container">
      <Slider ref={slider => (mySlider = slider)} {...settings}>
        {sliders.map(slider => (
          <div key={slider.sys.id}>
            {home && <img className='d-md-none' src={slider.fields.mobileImage.fields.file.url} alt="" />}
            <img
              className="d-none d-md-block"
              src={home ? slider.fields.image.fields.file.url : slider.fields.file.url}
              alt="" />
            {
              home &&
              <>
                <h2 className="title__slider">{slider.fields.title}</h2>
                <p className="subtitle__slider">{slider.fields.subtitle}</p>
                <p className="author">author: <span>{slider.fields.author}</span> de la web: <span>{slider.fields.sponsor}</span> </p>

              </>
            }
          </div>
        ))}
      </Slider>
      <div className="buttonPlay" onClick={() => playStop()}> <img src={!onPlay ? PauseIcon : PlayIcon} alt="" /></div>
    </div>
  )
}

export default SliderHome

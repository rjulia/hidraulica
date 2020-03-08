import React from 'react'
import './ImageFrame.scss'
const ImageFrame = (props) => {
  const { style, img } = props
  return (
    <div className="frame" style={style}>
      <div className="frame__interior">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default ImageFrame

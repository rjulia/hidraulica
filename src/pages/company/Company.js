import React from 'react'
import { withTranslation } from 'react-i18next';
import { HeroImage } from "components";
import ImgHero from "assets/images/img_slider_home_example.png";
import './Comapny.scss'
const Company = (props) => {
  const { t } = props

  return (
    <div className="container company__container">
      <HeroImage
        title={t('company.title')}
        image={ImgHero}

      />
      Company
    </div>
  )
}

export default withTranslation()(Company)

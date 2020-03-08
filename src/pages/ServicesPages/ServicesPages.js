import React from 'react'
import { withTranslation } from 'react-i18next';
import { HeroImage } from "components";
import ImgHero from "assets/images/img_slider_home_example.png";

const ServicesPages = (props) => {
  const { t } = props
  return (
    <div className="container company__container">
      <HeroImage
        title={t('services.title')}
        image={ImgHero}
        subtitle={t('services.subtitle')}
      />
      Services
    </div>
  )
}

export default withTranslation()(ServicesPages)

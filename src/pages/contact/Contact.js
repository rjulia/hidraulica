import React from 'react'
import { withTranslation } from 'react-i18next';
import { HeroImage } from "components";
import ImgHero from "assets/images/img_slider_home_example.png";
import './Contact.scss'

const Contact = (props) => {
  const { t } = props
  return (
    <div className="container contact__container">
      <HeroImage
        title={t('contact.title')}
        image={ImgHero}
      />
      Contact
    </div>
  )
}

export default withTranslation()(Contact)

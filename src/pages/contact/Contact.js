import React from 'react'
import { withTranslation } from 'react-i18next';
import { HeroImage, WrapperSection, Title } from "components";
import FormContactcomponents/FormContact/FormContactContact";
import ImgHero from "assets/images/img_slider_home_example.png";
import './Contact.scss'

const Contact = (props) => {
  const { t } = props
  return (
    <div className="container-fluid contact__container">
      <HeroImage
        title={t('contact.title')}
        image={ImgHero}
      />
      <WrapperSection classN={'block'}>
        <div className="first_block--title col-12 col-md-3">
          <Title text={t('contact.title')} />
        </div>
        <div className="first_block--block col-12 col-md-9">
          <p className='first_block--description'>{t('contact.description')}</p>
          <div>
            <iframe title="mymap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.547941314626!2d2.7146310158159985!3d41.70869367923596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb3c8d36cd7c67%3A0x697c5d329cb57b1d!2sHidr%C3%A0ulica%20Catalana%20de%20Manteniment%20S.L.!5e0!3m2!1sen!2shk!4v1584928293062!5m2!1sen!2shk" width="100% " height="623" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>
      </WrapperSection>
      <WrapperSection classN={'column light'}>
        <div className="second_block--title">
          <Title text={t('home.form_contact.title')} />
          <FormContact  {...props} />
        </div>

      </WrapperSection>
    </div>
  )
}

export default withTranslation()(Contact)

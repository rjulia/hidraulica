import React from 'react'
import { withTranslation } from 'react-i18next';
import { HeroImage, Title, WrapperSection } from "components";
import ImgHero from "assets/images/img_slider_home_example.png";
import Factory from 'assets/images/entry-company.png'
import './Comapny.scss'
import ImageFrame from '../../components/ImageFrame/ImageFrame';
const Company = (props) => {
  const { t } = props

  return (
    <div className="container-fluid company__container">

      <div className="container ">
        <HeroImage
          title={t('company.title')}
          image={ImgHero}
        />
      </div>
      <WrapperSection classN={'block'}>
        <div className="first_block--title">
          <Title text={t('company.first_block.title')} />
        </div>
        <div className="first_block--block">
          <p className='first_block--description'>{t('company.first_block.description')}</p>
        </div>
      </WrapperSection>
      <WrapperSection classN={'block light'}>
        <div className="first_block--title">
          <Title text={t('company.second_block.title')} />
        </div>
        <div className="first_block--block">
          <p className='first_block--description'>{t('company.second_block.description')}</p>
          <ImageFrame img={Factory} style={{ marginTop: ' 50px' }} />
        </div>
      </WrapperSection>
    </div>
  )
}

export default withTranslation()(Company)

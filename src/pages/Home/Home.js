import React from 'react'
import { withTranslation } from 'react-i18next';
import { SliderHome, Button, Title } from 'components';
import './Home.scss'
import { WrapperSection } from 'components/';
import Logos from "./components/Logos/logos-view";
import ImgLogos from "assets/images/img_home_homologaciones.png"
import Carousel from './components/Carousel/Carousel';

const Home = (props) => {
  const { t } = props
  return (
    <div className="container-fluid">
      <div className="container">
        <SliderHome />
      </div>
      <WrapperSection classN={'block'}>
        <div className="first_block--title">
          <Title text={t('home.first_block.title')} />
        </div>
        <div className="first_block--block">
          <p className='first_block--description'>{t('home.first_block.description')}</p>
          <p className='first_block--subtitulo'>{t('home.first_block.subtitle')}</p>
          <div>
            <img className='home__logos' src={ImgLogos} alt="" />
          </div>
        </div>
      </WrapperSection>
      <WrapperSection classN={'column dark'}>
        <div className="first_block--title">
          <Title dark text={t('home.second_block.title')} />
          <Button />
        </div>
        <div className="block__carousel">
          <Carousel />
        </div>
      </WrapperSection>
      <WrapperSection classN={'column'}>
        <div className="second_block--title">
          <Title text={t('home.third_block.title')} />

        </div>
        <div className="block__logos">
          <Logos />
        </div>
      </WrapperSection>
      <WrapperSection classN={'column'}>
        <div className="first_block--title">
          <Title text={t('home.form_contact.title')} />
        </div>
        <div className="block__contact">

        </div>
      </WrapperSection>
    </div>
  )
}

export default withTranslation()(Home)

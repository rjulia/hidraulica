import React from 'react'
import { withTranslation } from 'react-i18next';
import { SliderHome, Button, Title } from 'components';
import './Home.scss'
import WrapperSectionHome from './components/WrapperSectionHome/WrapperSectionHome';
import Logos from "./components/Logos/logos-view";
import ImgLogos from "assets/images/img_home_homologaciones.png"

const Home = (props) => {
  const { t } = props
  return (
    <div className="container-fluid">
      <div className="container">
        <SliderHome />
      </div>
      <WrapperSectionHome classN={'block'}>

        <div className="first_block--title">
          <Title text={t('home.first_block.title')} />
        </div>
        <div className="first_block--block">
          <p className='first_block--description'>{t('home.first_block.description')}</p>
          <p className='first_block--subtitulo'>{t('home.first_block.subtitle')}</p>
          <div>
            <img src={ImgLogos} alt="" />
          </div>
        </div>
      </WrapperSectionHome>
      <WrapperSectionHome classN={'block dark'}>
        <div className="first_block--title">
          <Title dark text={t('home.second_block.title')} />
          <Button />
        </div>
        <div className="block__carousel">

        </div>
      </WrapperSectionHome>
      <WrapperSectionHome classN={'block'}>
        <div className="first_block--title">
          <Title dark text={t('home.second_block.title')} />
          <Button />
        </div>
        <div className="block__logos">
          <Logos />
        </div>
      </WrapperSectionHome>
      <WrapperSectionHome classN={'block'}>
        <div className="first_block--title">
          <Title dark text={t('home.second_block.title')} />
          <Button />
        </div>
        <div className="block__contact">

        </div>
      </WrapperSectionHome>
    </div>
  )
}

export default withTranslation()(Home)

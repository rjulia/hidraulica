import React from 'react'
import { withTranslation } from 'react-i18next';
import { SliderHome } from '../../components';
import './Home.scss'
import WrapperSectionHome from './components/WrapperSectionHome/WrapperSectionHome';
import ImgLogos from "../../assets/images/img_home_homologaciones.png"

const Home = (props) => {
  const { t } = props
  return (
    <div className="container">
      <SliderHome />
      <WrapperSectionHome classN={'first_block'}>
        <div className="first_block--title">

          <h1>{t('home.first_block.title')}</h1>

        </div>
        <div className="first_block--block">
          <p className='first_block--description'>{t('home.first_block.description')}</p>
          <p className='first_block--subtitulo'>{t('home.first_block.subtitle')}</p>
          <div>
            <img src={ImgLogos} alt="" />
          </div>
        </div>
      </WrapperSectionHome>
    </div>
  )
}

export default withTranslation()(Home)

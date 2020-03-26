import React from 'react'
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import { SliderHome, Button, Title, WrapperSection, } from 'components';
import FormContact from "components/FormContact/FormContact";
import './Home.scss'
import Logos from "./components/Logos/logos-view";
import ImgLogos from "assets/images/img_home_homologaciones.png"
import Carousel from './components/Carousel/Carousel';
import Arrow from "assets/icons/ic_arrow_down_white.svg";


const Home = (props) => {
  const { t } = props
  return (
    <div className="container__fluid menu-on-top">
      <div className="container">
        <SliderHome />
      </div>
      <WrapperSection classN={'block'}>
        <div className="first_block--title col-12 col-md-3">
          <Title text={t('home.first_block.title')} />
        </div>
        <div className="first_block--block col-12 col-md-9">
          <p className='first_block--description'
            dangerouslySetInnerHTML={{ __html: t('home.first_block.description') }} />
          <p className='first_block--subtitulo'>{t('home.first_block.subtitle')}</p>
          <div>
            <img className='home__logos' src={ImgLogos} alt="" />
          </div>
        </div>
      </WrapperSection>
      <WrapperSection classN={'column dark'}>
        <div className="first_block--title col-12">
          <Title blue text={t('home.second_block.title')} />
          <Link className="first_block--link" to="/projectos">{t('home.second_block.button')} <img src={Arrow} alt="" /> </Link>
        </div>
        <div className="block__carousel col-12">
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
      <WrapperSection classN={'column light'}>
        <div className="first_block--title col-12 col-md-12">
          <Title text={t('home.form_contact.title')} />
        </div>
        <div className="block__contact col-12 col-md-12">
          <FormContact  {...props} />
        </div>
      </WrapperSection>
    </div>
  )
}

export default withTranslation()(Home)

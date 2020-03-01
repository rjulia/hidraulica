import React from 'react'
import { withTranslation } from 'react-i18next';
import { SliderHome } from '../components';

const Home = (props) => {
  const { t } = props
  return (
    <div className="container">
      <SliderHome />
      <h1>{t('404.content')}</h1>
    </div>
  )
}

export default withTranslation()(Home)

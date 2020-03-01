import React from 'react'
import { withTranslation } from 'react-i18next';

const Home = (props) => {
  const { t } = props
  return (
    <div>
      <h1>{t('404.content')}</h1>
    </div>
  )
}

export default withTranslation()(Home)

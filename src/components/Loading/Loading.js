import _ from 'lodash'
import React from 'react'
import { withTranslation } from 'react-i18next';
import './Loading.scss'

const Loading = ({ i18n }) => {
  let loading = []
  if (i18n.language === 'es-ES') {
    loading = _.split('ODNAGRAC', '')
  } else {
    loading = _.split('TNAGERRAC', '')
  }
  return (
    <div className="loading__container">

      <div id="load">
        {loading.map((l, idx) => (<div key={idx}>{l}</div>))}
      </div>
    </div>
  )
}

export default withTranslation()(Loading)

import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import './Services.scss'
import { SliderHome, Title, WrapperSection, HeroImage } from 'components';
import { getService } from '../../services/contentful'
import {
  useParams
} from "react-router-dom";
import Check from 'assets/icons/ic_check_white.svg'
import { withTranslation } from 'react-i18next';

const Service = (props) => {
  let { slug } = useParams();
  console.log(slug)
  const { i18n, t } = props
  const [isLoading, setLoading] = useState(true)
  const [service, setService] = useState([])
  const promiseService = getService(i18n.language, slug)

  useEffect(() => {
    setLoading(true)
    promiseService
      .then(data => {
        setService(data[0])
      }).finally(() => {
        setLoading(false)
      })
  }, [slug])
  console.log(service)
  return (
    <div className="container__fluid services menu-on-top">
      <div className="container">
        <HeroImage
          image={_.get(service, 'fields.heroImage.fields.file.url')}
          title={_.get(service, 'fields.title')}
          subtitle={_.get(service, 'fields.heroImage.subtitle')}
        />
      </div>
      <WrapperSection classN={'block'}>
        <div className="first_block--title col-12 col-md-3">
          <Title text={t('home.first_block.title')} />
        </div>
        <div className="first_block--block col-12 col-md-9">
          <p className='first_block--description'
            dangerouslySetInnerHTML={{ __html: _.get(service, 'fields.description.content[0].content[0].value') }} />

        </div>
      </WrapperSection>
      <WrapperSection classN={'column dark'}>
        <div className="first_block--title col-12">
          <Title text={t('home.first_block.title')} />
        </div>
        <div className="first_block--block offer col-12">
          {
            service && _.map(_.get(service, 'fields.listOffers'), parf => (

              <p className='offer-parf' key={parf}><img src={Check} alt="" /><span>{parf}</span></p>
            ))
          }

        </div>

      </WrapperSection>
      <WrapperSection classN={'column'}>

      </WrapperSection>
      <WrapperSection classN={'column'}>

      </WrapperSection>
    </div>
  )
}

export default withTranslation()(Service)

import _ from 'lodash'
import { Link } from "react-router-dom";
import Arrow from "assets/icons/ic_arrow_down_black.svg";

import React, { useEffect, useState } from 'react'
import './Services.scss'
import { Title, WrapperSection, HeroImage, Card } from 'components';
import { getService } from '../../services/contentful'
import { useParams } from "react-router-dom";
import Check from 'assets/icons/ic_check_white.svg'
import { withTranslation } from 'react-i18next';

const Service = (props) => {
  let { slug } = useParams();
  console.log(slug)
  const { i18n, t } = props
  const [isLoading, setLoading] = useState(true)
  const [service, setService] = useState([])
  const promiseService = getService(i18n.language, slug)
  const [relateds, setRelateds] = useState([])
  useEffect(() => {
    setLoading(true)
    promiseService
      .then(data => {
        setService(data[0])
        setRelateds(_.get(data[0], 'fields.proyectosRelacionados'))
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  console.log(service)
  if (isLoading) {
    return <p>Is loading</p>
  }
  return (
    <div className="container__fluid services menu-on-top">
      <div className="container">
        <HeroImage
          image={_.get(service, 'fields.heroImage.fields.file.url')}
          title={_.get(service, 'fields.titleImage')}
          subtitle={_.get(service, 'fields.subtitleImage')}
        />
      </div>
      <WrapperSection classN={'block'}>
        <div className="first_block--title col-12 col-md-4">
          <Title text={t('services.first_block.title')} />
        </div>
        <div className="first_block--block col-12 col-md-8">
          <p className='first_block--description'
            dangerouslySetInnerHTML={{ __html: _.get(service, 'fields.description.content[0].content[0].value') }} />

        </div>
      </WrapperSection>
      <WrapperSection classN={'column dark'}>
        <div className="first_block--title col-12">
          <Title blue text={t('services.second_block.title')} />
        </div>
        <div className="first_block--block offer col-12">
          {
            service && _.map(_.get(service, 'fields.listOffers'), parf => (

              <p className='offer-parf' key={parf}><img src={Check} alt="" /><span>{parf}</span></p>
            ))
          }

        </div>

      </WrapperSection>
      <div className="services_outstanding">
        <div className="container">
          <p>{_.get(service, 'fields.textoDestacado')}</p>
        </div>
      </div>
      <WrapperSection classN={'column'}>
        <div className="first_block--title col-12 col-md-12">
          <Title text={t('services.third_block.title')} />
          <Link className="first_block--link" to="/projectos">{t('services.third_block.button')} <img src={Arrow} alt="" /> </Link>
        </div>
        <div className='col-12 ml-md-5 mt-md-5'>
          <div className="row">
            {
              relateds && _.map(relateds, related => (
                <div className="col-12 col-md-4" key={related.sys.id} >
                  <Card project={related} />
                </div>
              ))
            }
          </div>
        </div>

      </WrapperSection>
    </div>
  )
}

export default withTranslation()(Service)

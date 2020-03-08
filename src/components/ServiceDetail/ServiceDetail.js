import _ from 'lodash'
import React from 'react'
import { HeroImage, WrapperSection, Title } from "components";
import { withTranslation } from 'react-i18next';

const ServiceDetail = ({ t, service }) => {

  console.log(service)
  const imgHero = _.get(service, 'fields.heroImage.fields.file.url')
  const title = _.get(service, 'fields.titleImage')
  const subtitle = _.get(service, 'fields.subtitleImage')


  return (
    <>
      <div className="container">

        <HeroImage
          title={title}
          image={imgHero}
          subtitle={subtitle}
        />
      </div>
      <WrapperSection classN={'block'}>
        <div className="first_block--title">
          <Title text={t('services.first_block.title')} />
        </div>
      </WrapperSection>
      <WrapperSection classN={'column dark'}>
        <div className="first_block--title">
          <Title text={t('services.second_block.title')} />
        </div>
      </WrapperSection>
      <WrapperSection classN={'column'}>
        <div className="second_block--title">
          <Title text={t('services.third_block.title')} />

        </div>

      </WrapperSection>
    </>
  )
}

export default withTranslation()(ServiceDetail)

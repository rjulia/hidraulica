import _ from 'lodash'

import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './Project.scss'
import { getSingleProject } from '../../services/contentful'
import { withTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { SliderHome, Title, WrapperSection } from "components";

const Project = (props) => {

  let { slug } = useParams();
  console.log(slug)
  const { i18n, t } = props
  const promise = getSingleProject(i18n.language, slug)
  const [project, setProject] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    promise
      .then(data => {
        console.log(data)
        setProject(data)
      }).finally(() => {
        setLoading(false)
      })
  }, [slug])

  console.log(project)
  if (isLoading) {
    return <p>Loading</p>
  }
  return (
    <div className="projects__container">
      <div className="container">
        <span className="breadcrumb_container"><Link to="/projectos">{t('projects.title')}</Link> / <span className="breadcrumb__end">{_.get(project[0], 'fields.title')}}</span></span>

        <SliderHome sliders={_.get(project[0], 'fields.image')} />
      </div>
      <WrapperSection classN={'block'}>
        <div className="first_block--title col-12 col-md-3">
          <Title text={_.get(project[0], 'fields.title')} />
        </div>
        <div className="first_block--block offer col-12 col-md-9">
          <p className='first_block--description'
            dangerouslySetInnerHTML={{ __html: _.get(project[0], 'fields.description.content[0].content[0].value') }} />
        </div>

      </WrapperSection>
    </div>
  )
}

export default withTranslation()(Project)

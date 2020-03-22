/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash'
import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { getProjects, getServices } from '../../services/contentful'
import { HeroImage, Filter, Card } from "components";
import './Projectes.scss'
import ImgHero from "assets/images/img_projectes.png";
import { Loading } from 'components';

const Projects = props => {
  const { i18n, t } = props
  const promise = getProjects(i18n.language)
  const promiseServices = getServices(i18n.language)

  const [projects, setProjects] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [services, setServices] = useState([])

  useEffect(() => {
    setLoading(true)

    Promise.all([promise, promiseServices])
      .then(data => {
        setProjects(data[0])
        setServices(data[1])
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  const filterProps = {
    services,
    projects,
    ...props
  }
  if (isLoading) return <Loading />
  return (
    <div className='projects__contianer container'>
      <HeroImage
        title={t('projects.title')}
        image={ImgHero}

      />
      <Filter {...filterProps} />
      <div className="row">
        {
          projects && _.map(projects, project => (
            <div className="col-12 col-md-4" key={project.sys.id} >
              <Card project={project} />

            </div>
          ))
        }

      </div>
    </div>
  )
}
export default withTranslation()(Projects)
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { getProjects } from '../../services/contentful'
import { HeroImage } from "components";
import './Projectes.scss'
import ImgHero from "assets/images/img_slider_home_example.png";
import { Loading } from 'components';

const Projects = props => {
  const { i18n, t } = props
  const promise = getProjects(i18n.language)
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    promise.then(projects => {
      setPosts(projects)
      setLoading(false)
    })
  }, [])
  if (isLoading) return <Loading />
  return (
    <div className='projects__contianer container'>
      <HeroImage
        title={t('projects.title')}
        image={ImgHero}

      />
      Projects
    </div>
  )
}
export default withTranslation()(Projects)
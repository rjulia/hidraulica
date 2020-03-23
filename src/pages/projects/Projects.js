/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash'
import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { getProjects, getServices, filterProjects } from '../../services/contentful'
import { HeroImage, Filter, Card } from "components";
import './Projectes.scss'
import ImgHero from "assets/images/img_projectes.png";
import { Loading } from 'components';
const initialStateFilter = {
  category: '',
  location: '',
  date: new Date()
}

const Projects = props => {
  const { i18n, t } = props
  const promise = getProjects(i18n.language)
  const promiseServices = getServices(i18n.language)

  const [projectsFiltered, setProjectsFiltered] = useState()
  const [projects, setProjects] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [services, setServices] = useState([])
  const [filterInitial, setFilterInitial] = useState(initialStateFilter)

  useEffect(() => {
    setLoading(true)
    Promise.all([promise, promiseServices])
      .then(data => {
        setProjects(data[0])
        setProjectsFiltered(data[0])
        setServices(data[1])
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  const cleanFilter = () => {
    setFilterInitial(initialStateFilter)
    setProjectsFiltered(projects)
  }

  const handleChage = (value, key) => {

    console.log(value, key)

    const options = {
      ...filterInitial,
      [key]: (key === 'date') ? value : value[0].value
    }

    const promiseProjectFiltered = filterProjects(i18n.language, options)
    promiseProjectFiltered.then(data => {
      console.log(data)
      setProjectsFiltered(data)

    }).finally(setFilterInitial(options))


  }

  const filterProps = {
    filterInitial,
    services,
    projects,
    handleChage,
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
      <div onClick={() => cleanFilter()}>Clean</div>
      <div className="row">
        {
          projectsFiltered && _.map(projectsFiltered, project => (
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
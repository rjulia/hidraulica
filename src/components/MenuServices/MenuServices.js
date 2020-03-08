/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './MenuServices.scss'
import { Header, Loading } from "components";
import classNames from 'classnames'
import { getServices } from 'services/contentful'
import { withTranslation } from 'react-i18next';
import { Grid } from '@material-ui/core';
import useMenu from 'components/Header/use-header-context';
import MenuListServices from '../MenuListServices/MenuListServices';

const MenuServices = props => {
  const { i18n } = props
  const { toggleMenu, isOpen, getServicesCtx } = useMenu()
  const promise = getServices(i18n.language)
  const [subservices, setSubservices] = useState([])
  const [isLoading, setLoading] = useState(true)

  const categories = [
    'instalacion',
    'mantenimiento',
    'servicio',
    'alquiler'
  ]

  let menuClass = classNames({
    "container-fluid": true,
    'menu-services__container': true,
    'show': isOpen,
  })
  useEffect(() => {

    promise.then(services => {
      setSubservices(services)
      getServicesCtx(services)
      setLoading(false)
    })

  }, [i18n.language])

  if (isLoading) return <Loading />
  return (
    <div className={menuClass}>
      <div className="contianer menu-services__box">
        <Header />
        <Grid container>
          {
            categories.map((category, idx) => (
              <MenuListServices
                key={idx}
                category={category}
                subservices={subservices}
                i18n={i18n}
                handelMenu={toggleMenu}
              />
            ))
          }

        </Grid>
      </div>

    </div>
  )
}

export default withTranslation()(MenuServices)

import React from 'react'
import useMenu from 'components/Header/use-header-context';
import { ServiceDetail } from "components";

const ServicesPages = () => {

  const { services } = useMenu()

  return (
    <div className="container-fluid company__container">
      <ServiceDetail service={services[0]} />
    </div>
  )
}

export default ServicesPages

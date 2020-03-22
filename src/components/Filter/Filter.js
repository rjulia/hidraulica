import _ from 'lodash'
import React, { useState } from 'react'
import "./Filter.scss";
import { DropDown } from "components";
import { cities } from 'constants/index'


const Filter = ({ projects, services, ...others }) => {

  console.log(projects, services)

  const servicesFilter = _.map(services, service => {
    return {
      value: _.get(service, 'fields.slug'),
      label: _.get(service, 'fields.title')
    }
  })

  console.log(servicesFilter)

  const [location, setLocation] = useState()

  const array = [1, 2, 3]
  return (
    <div className="filter__container">
      <DropDown
        title={"Servei"}
        options={servicesFilter}
      />
      <DropDown
        title={"Localizacion"}
        options={cities}
      />
      <DropDown
        title={"Data realizacion"}
        options={array}
      />
    </div>
  )
}

export default Filter

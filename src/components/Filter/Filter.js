import React from 'react'
import moment from 'moment';
import "./Filter.scss";
import { DropDown } from "components";
import { useTranslation } from 'react-i18next'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ handleChage, filterInitial }) => {

  const { t } = useTranslation()

  const category = [

    {
      label: t('constants.category.instalacion'),
      value: 'instalacion'
    },
    {
      label: t('constants.category.mantenimiento'),
      value: 'mantenimiento'
    },
    {
      label: t('constants.category.servicio'),
      value: 'servicio'
    },
    {
      label: t('constants.category.alquiler'),
      value: 'alquiler'
    }
  ]

  const cities = [
    {
      label: t('constants.cities.bcn'),
      value: 'Barcelona'
    },
    {
      label: t('constants.cities.gi'),
      value: 'Lleida'
    },
    {
      label: t('constants.cities.le'),
      value: 'Girona'
    },
    {
      label: t('constants.cities.ta'),
      value: 'Tarragona'
    },
    {
      label: t('constants.cities.others'),
      value: 'otras'
    },
  ]
  moment.locale();
  return (
    <div className="filter__container">
      <DropDown
        title={"Categoria"}
        options={category}
        value={filterInitial.category}
        handleChage={handleChage}
        keyValue={'category'}
      />
      <DropDown
        title={"Localizacion"}
        options={cities}
        value={filterInitial.location}
        handleChage={handleChage}
        keyValue={'location'}

      />
      <DatePicker
        selected={filterInitial.date}
        onChange={date => handleChage(date, 'date')}
      />
    </div>
  )
}

export default Filter

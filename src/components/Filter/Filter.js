import React from 'react'
import moment from 'moment';
import "./Filter.scss";
import { DropDown } from "components";
import { useTranslation } from 'react-i18next'
import Refresh from 'assets/icons/ic_reestrablecer.svg'
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ handleChage, filterInitial, hasPorjectsFilter }) => {
  const { t } = useTranslation()

  function refreshPage() {
    window.location.reload(false);
  }

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
  const orderBy = [
    {
      label: t('constants.orderBy.recent'),
      value: 'sys.createdAt'
    },
    {
      label: t('constants.orderBy.lastest'),
      value: '-sys.createdAt'
    },
  ]

  moment.locale();
  return (
    <div className="filter__container">
      <div>
        <DropDown
          title={t('projects.subtitle.first_subtitle.label')}
          options={category}
          value={filterInitial.category}
          handleChage={handleChage}
          keyValue={'category'}
        />
        <DropDown
          title={t('projects.subtitle.second_subtitle.label')}
          options={cities}
          value={filterInitial.location}
          handleChage={handleChage}
          keyValue={'location'}

        />
        <DropDown
          title={t('projects.subtitle.third_subtitle.label')}
          options={orderBy}
          value={filterInitial.date}
          handleChage={handleChage}
          keyValue={'date'}
        />
      </div>
      <div className="refresh">

        {hasPorjectsFilter && <div onClick={() => refreshPage()}>{t('projects.refresh')} <img src={Refresh} alt="" /> </div>}

      </div>
    </div>
  )
}

export default Filter

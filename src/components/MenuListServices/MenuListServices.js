import _ from 'lodash'
import React, { useMemo } from 'react'
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import './MenuListServices.scss';
import { Title } from 'components';

const MenuListServices = ({ category, i18n, subservices, handelMenu }) => {


  const listItmes = useMemo(() => subservices.filter(subservice => _.get(subservice, 'fields.category') === category), subservices)

  const HandleCloseMenu = () => {
    handelMenu(false)
  }

  return (
    <Grid item sm={3} className="menu-list-items__container">
      <Title text={category} small />
      <ul>
        {
          listItmes
            .map(item => (
              <li
                key={_.get(item, 'sys.id')}
              >
                <Link
                  onClick={() => HandleCloseMenu()}
                  to={`/servicios/${_.get(item, 'fields.slug')}`}>
                  {_.get(item, 'fields.title')}
                </Link>
              </li>
            ))
        }
      </ul>
    </Grid>
  )
}

export default MenuListServices

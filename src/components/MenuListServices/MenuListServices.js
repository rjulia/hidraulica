import _ from 'lodash'
import React from 'react'
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import './MenuListServices.scss';
import { Title } from 'components';

const MenuListServices = ({ category, i18n, subservices, handelMenu }) => {


  const listItmes = subservices.filter(subservice => _.get(subservice, 'fields.category') === category)

  const HandleCloseMenu = () => {
    handelMenu()
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
                  to={`services/${_.get(item, 'fields.slug')}`}>
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

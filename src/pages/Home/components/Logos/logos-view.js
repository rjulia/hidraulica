/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useStyles } from './logos-styles'
import Grid from '@material-ui/core/Grid';
import { getLogosSlider } from 'services/contentful'
import { withTranslation } from 'react-i18next';

const LogosView = ({ i18n }) => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true)
  const [logos, setLogos] = useState([])
  const promise = getLogosSlider(i18n.language)

  useEffect(() => {
    promise.then(logosI => {
      setLogos(logosI)
      setLoading(false)
    })
  }, [])
  if (isLoading) return <p>Loading...</p>
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}>

        {
          logos.map(logo => (
            <Grid key={_.get(logo, 'sys.id')} item xs={6} sm={3}>
              <img
                className={classes.img}
                src={_.get(logo, 'fields.imageLogo.fields.file.url')}
                alt={_.get(logo, 'fields.imageLogo.fields.title')}
              />
            </Grid>

          ))
        }
      </Grid>
    </div>
  )
}

export default withTranslation()(LogosView)

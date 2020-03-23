import _ from 'lodash'
import React from 'react'
import './Card.scss'
import { Link } from "react-router-dom";
const Card = ({ project }) => {

  const slug = _.get(project, 'fields.slug')
  const image = _.get(project, 'fields.thumbnail.fields.file.url')
  const title = _.get(project, 'fields.title')
  const subcategoria = _.get(project, 'fields.subcategoria.fields.title')

  return (
    <Link to={`/projects/${slug}`} className="cart__container">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="cart__box">
        <h4>{subcategoria}</h4>
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default Card

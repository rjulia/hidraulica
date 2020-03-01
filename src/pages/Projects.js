import React, { useEffect, useState } from 'react'
import { getProjects } from '../services/contentful'


const Projects = props => {
  console.log(props)
  const { i18n } = props
  const promise = getProjects(i18n.language)
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    promise.then(projects => {
      setPosts(projects)
      setLoading(false)
    })
  }, [])
  console.log(posts)
  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      Projects
    </div>
  )
}
export default Projects
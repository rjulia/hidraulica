const client = require('contentful').createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

const getProjects = (language) =>
  client
    .getEntries({
      content_type: 'project',
      locale: language
    })
    .then(response => response.items)

const getSingleProject = slug =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'project'
    })
    .then(response => response.items)

const getHomeSlider = (language) =>
  client
    .getEntries({
      content_type: 'heroImage',
      locale: language
    })
    .then(response => {
      console.log(response)
      return response.items
    })


export { getProjects, getSingleProject, getHomeSlider }
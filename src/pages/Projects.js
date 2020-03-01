import React from 'react'
// import { useContentful } from 'react-contentful';
// main.js
var contentful = require('contentful')
var client = contentful.createClient({
  accessToken: 'pt5MIZFLg9-xobU67uBrmnfZygojpma49UBuq6yUh0o',
  space: '4va3gsyvff1n',
})

const Projects = props => {
  client.getEntries({
    content_type: "obras",
    order: 'sys.createdAt'
  })
    .then(function (entries) {
      // log the title for all the entries that have it
      console.log(entries.items)
    })



  return (
    <div>
      Projects
    </div>
  )
}
export default Projects
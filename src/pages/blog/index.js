import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/Blogpage/BlogRoll'
import BlogNav from '../../components/BlogNav'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
         <BlogNav />
         <div className="page-contant">
            <BlogRoll />
         </div>
      </Layout>
    )
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'
import {Card, Row, Col, Container } from 'react-bootstrap'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { IoIosArrowRoundForward } from "react-icons/io";
import './BlogRoll.sass'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="blog-block front-blocks" id="blog">
      <Container>
        <div className="section-title text-center">
           <span className="badge badge-primary">BLOGS</span>
           <h2>Blogs We Wrote For You</h2>
           <span className="section-title-line"></span>
        </div>
        <Row>
        {posts &&
          posts.map(({ node: post }) => (
            <Col xs={12} md={4} key={post.id}>
              <Card className={`card theme-card blog-card ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}>

                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <img alt={post.frontmatter.title} src={post.frontmatter.featuredimage.publicURL} />
                  </div>
                ) : null}
                <Card.Body>
                <span className="postdate">{post.frontmatter.date}</span>
                  <h6>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link></h6>
                  <Card.Text>
                     {post.excerpt}
                  </Card.Text>
                  <span className="readlink">
                    <Link to={post.fields.slug}>Read More </Link>
                  </span>
                  <div className="tags-block">
                      {post.frontmatter.tags.map(tag => (
                        <span key={tag + `tag`} className="badge badge-primary"><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></span>
                      ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
        </Container>
        <Container>
          <div className="allposteslink">
            <Link className="btn btn-primary btn-lg" to="/blog" > 
              All Posts <IoIosArrowRoundForward/>
            </Link>
          </div>
        </Container>
      </section>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 150)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                tags
                featuredimage {
                  publicURL
                } 
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import {Card, Row, Col, Container } from 'react-bootstrap'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import './BlogRoll.sass'

class BlogRoll extends React.Component {
  render() {
    
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blog-block" id="blog">
      <Container>
        <div className="blog-block-wrraper">
          <Row>
          {posts &&
            posts.map(({ node: post }) => (
              <Col xs={12} md={4} key={post.id}>
              <div className="blog-card">
                  <Card className={`card theme-card  ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}>
                  <Card.Body>
                    <h6><Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link></h6>
                    <Card.Text>
                      <span className="blogdate">{post.frontmatter.date}</span>
                      {post.frontmatter.featuredimage.publicURL ? (
                      <div className="featured-thumbnail">
                       <img alt={post.frontmatter.title} src={post.frontmatter.featuredimage.publicURL} />
                      </div>
                      ) : null}
                      <p className="blogtext">{post.excerpt}</p>
                      <div class="bottom-link">
                        <Link to={post.fields.slug}>
                          Read more..
                        </Link>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  </Card>
                  </div>
              </Col>
            ))}
            </Row>
          </div>
        </Container>
      </div>
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
      query BlogRollpageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
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

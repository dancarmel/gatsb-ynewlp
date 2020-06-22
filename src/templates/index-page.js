import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Container, ButtonToolbar } from "react-bootstrap";
import Layout from "../components/Layout";
import Features from "../components/Features/Features";
import BlogRoll from "../components/Blog/BlogRoll";
import Subscribe from "../components/Subscribe/subscribe";
import Specialties from "../components/Specialties/specialties";
import Whyus from "../components/Whyus/whyus";
import Videoblock from "../components/Video/video";
import Featuresmid from "../components/Features-mid/features";
import Featuresmidsec from "../components/Features-mid-sec/features";
import Testimonials from "../components/Testimonials/testimonials";
import Pricing from "../components/Pricing/pricing";
import Team from "../components/Team/team";
import Download from "../components/Download/download";
import Download2 from "../components/Download2";
import Start from "../components/Start/start";
import Navbar from "../components/Navbar";
import Particles from "../components/Particle";
import Img from "gatsby-image";
import Loadable from "react-loadable";

const loader = () => <div>Loading...</div>;

const Previews = Loadable({
  loader: () => import("../components/Previews/previews"),
  loading: loader,
});

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  leftlink,
  leftcaption,
  rightlink,
  rightcaption,
  intro,
  specialtiesintro,
  whyusintro,
  videointro,
  featuresoneintro,
  featurestwointro,
  testimonialintro,
  teamintro,
  downloadintro,
  pricing,
  previewsintro,
}) => (
  <div>
    <header className="bg-primary">
      <Particles />
      <Navbar />
      <section className="banner-block pb-0" id="banner">
        <Container>
          <div className="text-center ">
            <h1 style={{ color: "white" }}>{title}</h1>
            <p className="lead" style={{ color: "white" }}>
              {subheading}
            </p>
            <ButtonToolbar className="button-toolbar pr-6">
              <a href={leftlink} className="btn btn-light btn-lg">
                {leftcaption}
              </a>
              <a href={rightlink} className="btn btn-outline-light btn-lg">
                {rightcaption}
              </a>
            </ButtonToolbar>
            <img alt="herobg" src={image} />
          </div>
        </Container>
      </section>
      <div className="effectiv">
        <img className="svg" src="img/bg.svg" alt="mainbg" />
      </div>
    </header>
    <Download
      heading={downloadintro.heading}
      subheading={downloadintro.subheading}
      text={downloadintro.text}
      caption={downloadintro.caption}
      link={downloadintro.link}
    />
    <Features
      heading={intro.heading}
      subheading={intro.subheading}
      gridItems={intro.blurbs}
    />
    <Subscribe />
    <Specialties
      heading={specialtiesintro.heading}
      discription={specialtiesintro.description}
      image={specialtiesintro.image.publicURL}
      gridItems={specialtiesintro.specialtiesblurbs}
    />
    <Whyus
      heading={whyusintro.heading}
      subheading={whyusintro.subheading}
      gridItems={whyusintro.whyusblurbs}
    />
    <Videoblock
      heading={videointro.heading}
      subheading={videointro.subheading}
      video={videointro.videoid}
      image={videointro.image.publicURL}
    />
    <Featuresmid
      heading={featuresoneintro.heading}
      description={featuresoneintro.description}
      caption={featuresoneintro.caption}
      link={featuresoneintro.link}
      image={featuresoneintro.image.publicURL}
    />
    <Featuresmidsec
      heading={featurestwointro.heading}
      description={featurestwointro.description}
      caption={featurestwointro.caption}
      link={featurestwointro.link}
      image={featurestwointro.image.publicURL}
    />
    <Previews
      heading={previewsintro.heading}
      subheading={previewsintro.subheading}
      gridItems={previewsintro.previewblurbs}
    />
    <Testimonials
      heading={testimonialintro.heading}
      subheading={testimonialintro.subheading}
      gridItems={testimonialintro.testimonialblurbs}
    />
    <Pricing data={pricing.plans} />
    <Team
      heading={teamintro.heading}
      subheading={teamintro.subheading}
      gridItems={teamintro.teamblurbs}
    />
    <BlogRoll />
    <Download
      heading={downloadintro.heading}
      subheading={downloadintro.subheading}
      text={downloadintro.text}
      caption={downloadintro.caption}
      link={downloadintro.link}
    />
    <Start />
  </div>
);
IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  specialheading: PropTypes.string,
  description: PropTypes.string,
  leftlink: PropTypes.string,
  leftcaption: PropTypes.string,
  rightlink: PropTypes.string,
  rightcaption: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  specialtiesintro: PropTypes.shape({
    specialtiesblurbs: PropTypes.array,
  }),
  whyusintro: PropTypes.shape({
    whyusblurbs: PropTypes.array,
  }),
  videointro: PropTypes.string,
  featuresoneintro: PropTypes.string,
  featurestwointro: PropTypes.string,
  testimonialintro: PropTypes.shape({
    testimonialblurbs: PropTypes.array,
  }),
  teamintro: PropTypes.shape({
    teamblurbs: PropTypes.array,
  }),
  downloadintro: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image.publicURL}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        leftlink={frontmatter.leftlink}
        leftcaption={frontmatter.leftcaption}
        rightlink={frontmatter.rightlink}
        rightcaption={frontmatter.rightcaption}
        intro={frontmatter.intro}
        specialtiesintro={frontmatter.specialtiesintro}
        whyusintro={frontmatter.whyusintro}
        videointro={frontmatter.videointro}
        featuresoneintro={frontmatter.featuresoneintro}
        featurestwointro={frontmatter.featurestwointro}
        testimonialintro={frontmatter.testimonialintro}
        teamintro={frontmatter.teamintro}
        downloadintro={frontmatter.downloadintro}
        pricing={frontmatter.pricing}
        previewsintro={frontmatter.previewsintro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          publicURL
        }
        subheading
        description
        leftlink
        leftcaption
        rightlink
        rightcaption
        intro {
          blurbs {
            image {
              publicURL
            }
            text
            title
          }
          heading
          subheading
        }
        specialtiesintro {
          heading
          description
          image {
            publicURL
          }
          specialtiesblurbs {
            title
            text
          }
        }
        whyusintro {
          heading
          subheading
          whyusblurbs {
            title
            text
          }
        }
        videointro {
          heading
          subheading
          image {
            publicURL
          }
          videoid
        }
        featuresoneintro {
          heading
          description
          image {
            publicURL
          }
          caption
          link
        }
        featurestwointro {
          heading
          description
          image {
            publicURL
          }
          caption
          link
        }
        testimonialintro {
          heading
          subheading
          testimonialblurbs {
            image {
              publicURL
            }
            title
            text
          }
        }
        teamintro {
          heading
          subheading
          teamblurbs {
            title
            designation
            text
            fb
            tw
            goo
            image {
              publicURL
            }
          }
        }
        downloadintro {
          heading
          subheading
          text
          caption
          link
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
            caption
            link
            recommended
          }
        }
        previewsintro {
          heading
          subheading
          previewblurbs {
            image {
              publicURL
            }
            title
          }
        }
      }
    }
  }
`;

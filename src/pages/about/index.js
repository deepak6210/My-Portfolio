import { StaticImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeading';
import * as s from './index.module.scss';

const About = () => {
  return (
    <Layout>
      <div className={s.aboutPage}>
        <AniLink swipe to="/" direction="up" className={s.backIcon}>
          <StaticImage src="../../images/up_arrow.png" alt="logo.png" />
        </AniLink>
        <PageHeader primaryHeading="about me" secondaryHeading="who i am" />
      </div>
    </Layout>
  );
};

export default About;

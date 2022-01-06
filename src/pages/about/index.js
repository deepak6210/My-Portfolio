import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { StaticImage } from 'gatsby-plugin-image';

import * as s from './index.module.scss';

import Layout from '../../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className={s.aboutPage}>
        <AniLink swipe to="/" direction="up" className={s.backIcon}>
          <StaticImage src="../../images/up_arrow.png" alt="logo.png" />
        </AniLink>
      </div>
    </Layout>
  );
};

export default About;

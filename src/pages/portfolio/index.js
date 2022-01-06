import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';

import * as s from './index.module.scss';

const Portfolio = () => {
  return (
    <Layout>
      <div className={s.portfolioPage}>
        <AniLink swipe to="/" direction="left" className={s.backIcon}>
          <StaticImage src="../../images/right_arrow.png" alt="logo.png" />
        </AniLink>
      </div>
    </Layout>
  );
};

export default Portfolio;

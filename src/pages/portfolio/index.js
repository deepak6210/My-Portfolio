import { StaticImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeading';
import * as s from './index.module.scss';

const Portfolio = () => {
  return (
    <Layout>
      <div className={s.portfolioPage}>
        <AniLink swipe to="/" direction="left" className={s.backIcon}>
          <StaticImage src="../../images/right_arrow.png" alt="logo.png" />
        </AniLink>
        <PageHeader primaryHeading="portfolio" secondaryHeading="my work" />
      </div>
    </Layout>
  );
};

export default Portfolio;

import { StaticImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeading';
import * as s from './index.module.scss';

const Strength = () => {
  return (
    <Layout>
      <div className={s.strengthPage}>
        <AniLink swipe direction="down" to="/" className={s.backIcon}>
          <StaticImage src="../../images/down_arrow.png" alt="logo.png" />
        </AniLink>
        <PageHeader primaryHeading="My Skills" secondaryHeading="Expert In" />
      </div>
    </Layout>
  );
};

export default Strength;

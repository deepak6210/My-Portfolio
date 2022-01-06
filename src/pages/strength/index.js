import React from 'react';
import Layout from '../../components/Layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { StaticImage } from 'gatsby-plugin-image';
import * as s from './index.module.scss';

const Strength = () => {
  return (
    <Layout>
      <div className={s.strengthPage}>
        <AniLink swipe direction="down" to="/" className={s.backIcon}>
          <StaticImage src="../../images/down_arrow.png" alt="logo.png" />
        </AniLink>
      </div>
    </Layout>
  );
};

export default Strength;

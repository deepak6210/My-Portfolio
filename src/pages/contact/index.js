import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';

import * as s from './index.module.scss';

const Contact = () => {
  return (
    <Layout>
      <div className={s.contactPage}>
        <AniLink swipe direction="right" to="/" className={s.backIcon}>
          <StaticImage src="../../images/left_arrow.png" alt="logo.png" />
        </AniLink>
      </div>
    </Layout>
  );
};

export default Contact;

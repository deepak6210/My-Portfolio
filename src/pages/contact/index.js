import { StaticImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeading';
import * as s from './index.module.scss';

const Contact = () => {
  return (
    <Layout>
      <div className={s.contactPage}>
        <AniLink swipe direction="right" to="/" className={s.backIcon}>
          <StaticImage src="../../images/left_arrow.png" alt="logo.png" />
        </AniLink>
        <PageHeader primaryHeading="get in touch" secondaryHeading="contact me" />
      </div>
    </Layout>
  );
};

export default Contact;

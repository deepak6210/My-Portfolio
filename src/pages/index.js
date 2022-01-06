import React from 'react';
import * as s from './index.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default function Home() {
  return (
    <div className={s.homeComponent}>
      <StaticImage
        src="../images/logo.png"
        width={75}
        height={75}
        alt="logo.png"
        className={s.logo}
      />
      <AniLink swipe direction="down" to="/about" className={s.about}>
        ABOUT
      </AniLink>
      <AniLink swipe to="/contact" direction="left" className={s.contact}>
        CONTACT
      </AniLink>
      <AniLink swipe to="/strength" direction="up" className={s.strength}>
        STRENGTH
      </AniLink>
      <AniLink swipe direction="right" to="/portfolio" className={s.portfolio}>
        PORTFOLIO
      </AniLink>
      <StaticImage
        src="../images/banner_bg.jpg"
        alt="profile.jpg"
        className={s.profile}
        placeholder="tracedSVG"
      />
      <div className={s.wrapper}>
        <h1>&nbsp;</h1>
        <AniLink paintDrip to="/resume" hex="#cc374c" className={s.resumeBtn}>
          RESUME
        </AniLink>
      </div>
    </div>
  );
}

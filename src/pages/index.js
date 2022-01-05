import React from 'react';
import { Link } from 'gatsby';
import * as s from './index.module.scss';

export default function Home() {
  return (
    <div className={s.homeComponent}>
      <Link to="/about" className={s.about}>
        ABOUT
      </Link>
      <Link to="/contact" className={s.contact}>
        CONTACT
      </Link>
      <Link to="/strength" className={s.strength}>
        STRENGTH
      </Link>
      <Link to="/portfolio" className={s.portfolio}>
        PORTFOLIO
      </Link>
    </div>
  );
}

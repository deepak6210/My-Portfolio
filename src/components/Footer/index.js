import React from 'react';
import * as s from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTwitter,
  faFacebook,
  faQuora,
  faInstagram,
  faDribbble,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={s.footer}>
      <p className={s.copyright}>Copyright © 2020 Deepak. All Rights Reserved</p>
      <ul className={s.icons}>
        <li>
          <a
            href="https://www.linkedin.com/in/deepak-sharma-a24b281a1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#b7b7b7" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Deepak_python?s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} color="#b7b7b7" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100006639453154"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} color="#b7b7b7" />
          </a>
        </li>
        <li>
          <a
            href="https://www.quora.com/profile/Deepak-Sharma-11106"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faQuora} color="#b7b7b7" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/d.e.e.p.a.k_.s.h.a.r.m.a?igshid=19t4eye4tou15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} color="#b7b7b7" />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/Deepak6210" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDribbble} color="#b7b7b7" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

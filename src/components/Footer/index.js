import {
  faDribbble,
  faFacebook,
  faInstagram,
  faLinkedin,
  faQuora,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as s from './index.module.scss';

const socialMediaLinks = [
  {
    link: `https://www.linkedin.com/in/deepak-sharma-a24b281a1`,
    icon: faLinkedin,
  },
  {
    link: `https://twitter.com/Deepak_python?s=09`,
    icon: faTwitter,
  },
  {
    link: `https://www.facebook.com/profile.php?id=100006639453154`,
    icon: faFacebook,
  },
  {
    link: `https://www.quora.com/profile/Deepak-Sharma-11106`,
    icon: faQuora,
  },
  {
    link: `https://instagram.com/d.e.e.p.a.k_.s.h.a.r.m.a?igshid=19t4eye4tou15`,
    icon: faInstagram,
  },
  {
    link: `https://dribbble.com/Deepak6210`,
    icon: faDribbble,
  },
];

const Footer = () => {
  return (
    <div className={s.footer}>
      <p className={s.copyright}>Copyright © 2020 Deepak. All Rights Reserved</p>
      <ul className={s.icons}>
        {socialMediaLinks.map((data, index) => {
          return (
            <li key={index.toString()}>
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={data.icon} color="#b7b7b7" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;

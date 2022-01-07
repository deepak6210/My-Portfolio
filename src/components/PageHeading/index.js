import React from 'react';
import * as s from './index.module.scss';

const PageHeader = ({ primaryHeading, secondaryHeading }) => {
  return (
    <div className={s.headingWrapper}>
      <div className={s.heading}>
        <h1 className={s.primaryHeading}>{primaryHeading}</h1>
        <p className={s.secondaryHeading}>{secondaryHeading}</p>
      </div>
    </div>
  );
};

export default PageHeader;

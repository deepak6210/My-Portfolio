import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';

const Resume = () => {
  return (
    <div>
      <p>Resume</p>
      <AniLink paintDrip to="/" color="black">
        Go back
      </AniLink>
    </div>
  );
};

export default Resume;

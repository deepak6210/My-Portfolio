import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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

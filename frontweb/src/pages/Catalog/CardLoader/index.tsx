import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = () => (
  <ContentLoader
    speed={3}
    width={320}
    height={320}
    viewBox="0 0 320 320"
    backgroundColor="#f2f2f2"
    foregroundColor="#d9d9d9"
  >
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

export default CardLoader;

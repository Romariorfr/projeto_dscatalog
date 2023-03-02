import React from 'react';
import ContentLoader from 'react-content-loader';

import './styles.css';

const CardLoader = () => (
  <div className='card-loader-container'>
    <ContentLoader
      speed={3}
      width={320}
      height={320}
      viewBox="0 0 320 320"
      backgroundColor="#f2f2f2"
      foregroundColor="#d9d9d9"
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="300" />
    </ContentLoader>
  </div>
);

export default CardLoader;

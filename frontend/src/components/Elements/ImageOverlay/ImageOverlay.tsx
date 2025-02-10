import React from 'react';

const ImageOverlay: React.FC = () => {
  return (
    <div
      role="img"
      className="z-0 absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-dark/40 from-20% to-dark/80 rounded-xl"
    />
  );
};

export default ImageOverlay;

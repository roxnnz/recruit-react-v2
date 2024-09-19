import React from 'react';

const RemoveIcon = ({ width = 18, height = 18, fill = 'currentColor', className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill={fill}
    className={className}
  >
    <path d="M3 6h18v2H3V6zm2 3h14v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V9zm3-3V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h5v2H2V6h5zm2 0h4V4h-4v2z" />
  </svg>
);

export default RemoveIcon;

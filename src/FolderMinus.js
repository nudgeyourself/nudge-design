import * as React from 'react';

const SvgFolderMinus = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      enableBackground: 'new 0 0 24 24',
    }}
    xmlSpace="preserve"
    width={24}
    height={24}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M22 19c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h5l2 3h9c1.1 0 2 .9 2 2v11z"
      style={{
        fill: 'none',
        stroke: '#888',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
    <path
      style={{
        fill: 'none',
        stroke: '#e44',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
      d="M9 14h6"
    />
  </svg>
);

export default SvgFolderMinus;

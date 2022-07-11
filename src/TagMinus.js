import * as React from 'react';

const SvgTagMinus = ({ title, titleId, ...props }) => (
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
      d="M21 13.8 13.8 21c-.8.8-2 .8-2.8 0h0l-8.6-8.6v-10h10L21 11c.8.8.8 2 0 2.8z"
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
      d="M8.6 12h6"
    />
  </svg>
);

export default SvgTagMinus;

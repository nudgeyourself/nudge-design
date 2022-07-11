import * as React from 'react';

const SvgTagPlus = ({ title, titleId, ...props }) => (
  <svg
    id="tag-plus_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
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
    <style>
      {
        '.tag-plus_svg__st1{fill:none;stroke:#0e952b;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      }
    </style>
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
    <path className="tag-plus_svg__st1" d="M11.6 9v6M8.6 12h6" />
  </svg>
);

export default SvgTagPlus;

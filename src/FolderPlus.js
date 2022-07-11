import * as React from 'react';

const SvgFolderPlus = ({ title, titleId, ...props }) => (
  <svg
    id="folder-plus_svg__Layer_1"
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
        '.folder-plus_svg__st1{fill:none;stroke:#0e952b;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}'
      }
    </style>
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
    <path className="folder-plus_svg__st1" d="M12 11v6M9 14h6" />
  </svg>
);

export default SvgFolderPlus;

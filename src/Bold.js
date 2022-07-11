import * as React from 'react';

const SvgBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="transparent" strokeWidth={2} stroke="currentColor">
      <path d="M15 9v7M9 9v7" strokeLinecap="round" />
      <path d="M9 12.5h6" />
    </g>
    <path
      d="M18 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
      fill="transparent"
      strokeWidth={2}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgBold;

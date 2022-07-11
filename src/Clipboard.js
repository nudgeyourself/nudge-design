import * as React from 'react';

const SvgClipboard = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      fill="transparent"
      strokeWidth={2}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM9.5 14l2 2 4-5.5"
      fill="transparent"
      strokeWidth={2}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgClipboard;

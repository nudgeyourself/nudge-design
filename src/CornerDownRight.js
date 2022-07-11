import * as React from 'react';

const SvgCornerDownRight = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="corner-down-right_svg__feather corner-down-right_svg__feather-corner-down-right"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m15 10 5 5-5 5" />
    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
  </svg>
);

export default SvgCornerDownRight;

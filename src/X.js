import * as React from 'react';

const SvgX = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="x_svg__feather x_svg__feather-x"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default SvgX;

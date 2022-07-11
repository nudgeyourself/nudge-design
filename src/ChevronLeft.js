import * as React from 'react';

const SvgChevronLeft = ({ title, titleId, ...props }) => (
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
    className="chevron-left_svg__feather chevron-left_svg__feather-chevron-left"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export default SvgChevronLeft;

import * as React from 'react';

const SvgChevronRight = ({ title, titleId, ...props }) => (
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
    className="chevron-right_svg__feather chevron-right_svg__feather-chevron-right"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default SvgChevronRight;

import * as React from 'react';

const SvgSortAscBars = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m6 3-6 8h4v10h4V11h4L6 3zm16 6h-8V7h8v2zm2-6H14v2h10V3zm-4 8h-6v2h6v-2zm-2 4h-4v2h4v-2zm-2 4h-2v2h2v-2z" />
  </svg>
);

export default SvgSortAscBars;

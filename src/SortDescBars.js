import * as React from 'react';

const SvgSortDescBars = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m6 21 6-8H8V3H4v10H0l6 8zm16-4h-8v-2h8v2zm2 2H14v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4V7zm-2-4h-2v2h2V3z" />
  </svg>
);

export default SvgSortDescBars;

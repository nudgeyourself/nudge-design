import * as React from 'react';

const SvgSelectOne = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M10 11.923h11m-11-8h11m-11 16h11"
      fill="transparent"
      strokeWidth={2}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 2a2 2 0 1 1 .001 3.999A2 2 0 0 1 4 2Z"
      fill="transparent"
      strokeWidth={2}
      stroke="currentColor"
    />
    <path
      d="M4 10a2 2 0 1 1 .001 3.999A2 2 0 0 1 4 10Z"
      fill="currentColor"
      strokeWidth={2}
      stroke="currentColor"
    />
    <path
      d="M4 18a2 2 0 1 1 .001 3.999A2 2 0 0 1 4 18Z"
      fill="transparent"
      strokeWidth={2}
      stroke="currentColor"
    />
  </svg>
);

export default SvgSelectOne;

import * as React from 'react';

const SvgBarChart = ({ title, titleId, ...props }) => (
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
    className="bar-chart_svg__feather bar-chart_svg__feather-bar-chart"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 20V10M18 20V4M6 20v-4" />
  </svg>
);

export default SvgBarChart;

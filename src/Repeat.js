import * as React from 'react';

const SvgRepeat = ({ title, titleId, ...props }) => (
  <svg
    id="repeat_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 24 24"
    style={{
      enableBackground: 'new 0 0 24 24',
    }}
    xmlSpace="preserve"
    width={24}
    height={24}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <style>
      {
        '.repeat_svg__st0{fill:none;stroke:#0e952b;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      }
    </style>
    <path className="repeat_svg__st0" d="m17 1 4 4-4 4" />
    <path className="repeat_svg__st0" d="M3 11V9c0-2.2 1.8-4 4-4h14M7 23l-4-4 4-4" />
    <path className="repeat_svg__st0" d="M21 13v2c0 2.2-1.8 4-4 4H3" />
  </svg>
);

export default SvgRepeat;

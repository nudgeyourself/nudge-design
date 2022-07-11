import * as React from 'react';

const SvgArchive = ({ title, titleId, ...props }) => (
  <svg
    id="archive_svg__Layer_1"
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
        '.archive_svg__st0{fill:none;stroke:#f74;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      }
    </style>
    <path className="archive_svg__st0" d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
  </svg>
);

export default SvgArchive;

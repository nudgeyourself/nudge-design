import * as React from 'react';

const SvgGraph = ({ title, titleId, ...props }) => (
  <svg
    id="graph_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
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
    <style>{'.graph_svg__st1{fill:currentColor}'}</style>
    <path
      style={{
        fill: 'none',
      }}
      d="M-1.2 3.9h26.7v20H-1.2z"
    />
    <g id="graph_svg__Rectangle-6-Copy-2">
      <path
        className="graph_svg__st1"
        d="M14.8 18.9H14c-1.8 0-3.2-1.2-3.2-2.6V5.8c0-1.4 1.4-2.6 3.2-2.6h.8c1.8 0 3.2 1.2 3.2 2.6v10.5c0 1.4-1.4 2.6-3.2 2.6zM14 5.2c-.5 0-.8.3-.8.6v10.5c0 .3.4.6.8.6h.8c.5 0 .8-.3.8-.6V5.8c0-.4-.4-.6-.8-.6H14z"
        transform="matrix(.83536 0 0 1.02509 7.993 2.545)"
      />
      <g transform="matrix(.83536 0 0 1.02509 7.993 2.545)">
        <defs>
          <path
            id="graph_svg__SVGID_1_"
            d="M16.8 5.8c0-.9-.9-1.6-2-1.6H14c-1.1 0-2 .7-2 1.6v10.5c0 .9.9 1.6 2 1.6h.8c1.1 0 2-.7 2-1.6V5.8z"
          />
        </defs>
        <clipPath id="graph_svg__SVGID_00000051349820308906188000000012829914661135770775_">
          <use
            xlinkHref="#graph_svg__SVGID_1_"
            style={{
              overflow: 'visible',
            }}
          />
        </clipPath>
      </g>
      <path
        className="graph_svg__st1"
        d="M14.8 18.9H14c-1.8 0-3.2-1.2-3.2-2.6V5.8c0-1.4 1.4-2.6 3.2-2.6h.8c1.8 0 3.2 1.2 3.2 2.6v10.5c0 1.4-1.4 2.6-3.2 2.6zM14 5.2c-.5 0-.8.3-.8.6v10.5c0 .3.4.6.8.6h.8c.5 0 .8-.3.8-.6V5.8c0-.4-.4-.6-.8-.6H14z"
        transform="matrix(.83536 0 0 1.02509 7.993 2.545)"
      />
      <path
        className="graph_svg__st1"
        d="M14.8 18.9H14c-1.8 0-3.2-1.2-3.2-2.6V5.8c0-1.4 1.4-2.6 3.2-2.6h.8c1.8 0 3.2 1.2 3.2 2.6v10.5c0 1.4-1.4 2.6-3.2 2.6zM14 5.2c-.5 0-.8.3-.8.6v10.5c0 .3.4.6.8.6h.8c.5 0 .8-.3.8-.6V5.8c0-.4-.4-.6-.8-.6H14z"
        transform="matrix(.83536 0 0 1.02509 7.993 2.545)"
      />
    </g>
    <path
      className="graph_svg__st1"
      d="M16.8 19.4H16c-1.8 0-3.2-1.6-3.2-3.5V6.5C12.8 4.6 14.2 3 16 3h.8C18.6 3 20 4.6 20 6.5v9.4c0 1.9-1.4 3.5-3.2 3.5zM16 5.6c-.4 0-.8.4-.8.9v9.4c0 .5.4.9.8.9h.8c.4 0 .8-.4.8-.9V6.5c0-.5-.4-.9-.8-.9H16z"
      transform="matrix(.8482 0 0 .76904 -1.776 7.026)"
      id="graph_svg__Rectangle-6-Copy-21"
    />
    <path
      className="graph_svg__st1"
      d="M18.7 20.4h-.8c-1.8 0-3.2-2.4-3.2-5.3V7.9c0-2.9 1.4-5.3 3.2-5.3h.8c1.8 0 3.2 2.4 3.2 5.3v7.2c0 2.9-1.4 5.3-3.2 5.3zm-.8-13.8c-.4 0-.8.6-.8 1.3v7.2c0 .7.4 1.3.8 1.3h.8c.4 0 .8-.6.8-1.3V7.9c0-.7-.4-1.3-.8-1.3h-.8z"
      transform="matrix(.8482 0 0 .5074 -11.298 11.604)"
      id="graph_svg__Rectangle-6-Copy-22"
    />
  </svg>
);

export default SvgGraph;

import * as React from 'react';

const SvgFolder = ({ title, titleId, ...props }) => (
  <svg
    id="folder_svg__Layer_1"
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
    <style>{'.folder_svg__st2{fill:#4675e8}'}</style>
    <path
      d="M22 19c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h5l2 3h9c1.1 0 2 .9 2 2v11z"
      style={{
        fill: 'none',
        stroke: '#888',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
    <path
      d="M9 14.5s1.1 1.5 3 1.5 3-1.5 3-1.5"
      style={{
        fill: 'none',
        stroke: '#4675e8',
        strokeWidth: 1.5,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
    <path
      className="folder_svg__st2"
      d="M9.8 11.8c-.4 0-.8-.4-.8-.8s.3-.8.7-.8h.1c.4 0 .8.3.8.8s-.4.8-.8.8zM14.3 11.8c-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5s.1-.4.2-.5c.2-.2.5-.3.8-.2.1 0 .2.1.2.2.2 0 .2.2.2.4s-.1.4-.2.5c-.1.1-.2.1-.2.2s-.2.1-.3.1z"
    />
  </svg>
);

export default SvgFolder;

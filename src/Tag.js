import * as React from 'react';

const SvgTag = ({ title, titleId, ...props }) => (
  <svg
    id="tag_svg__Layer_1"
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
    <style>{'.tag_svg__st2{fill:#4675e8}'}</style>
    <path
      d="M21 13.8 13.8 21c-.8.8-2 .8-2.8 0h0l-8.6-8.6v-10h10L21 11c.8.8.8 2 0 2.8z"
      style={{
        fill: 'none',
        stroke: '#888',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
    <path
      d="M8 12.3s1.1 1.5 3 1.5 3-1.5 3-1.5"
      style={{
        fill: 'none',
        stroke: '#4675e8',
        strokeWidth: 1.5,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    />
    <path
      className="tag_svg__st2"
      d="M8.8 9.5c-.4 0-.8-.3-.8-.7s.3-.8.7-.8h.1c.4 0 .8.3.8.8s-.4.7-.8.7zM13.3 9.5c-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5s.1-.4.2-.5c.2-.2.5-.3.8-.2.1 0 .2.1.2.2.2.1.2.3.2.5s0 .4-.2.5c-.1.1-.2.1-.2.2h-.3z"
    />
  </svg>
);

export default SvgTag;

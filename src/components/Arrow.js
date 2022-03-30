import React from 'react';

export default function Arrow(props) {
  return (
    <svg id={props.id} className={props.className + " arrow"} viewBox="0 0 22 9">
      <line x1="0" x2="20" y1="4" y2="4"/>
      <line x1="16" x2="20" y1="0" y2="4"/>
      <line x1="16" x2="20" y1="8" y2="4"/>
    </svg>
  );
};

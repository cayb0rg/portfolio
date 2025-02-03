import React from 'react';

interface MoonProps {
  size: number;
}

export default function Moon ({size}: MoonProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 30 30"
      width={size}
      height={size}
      className="fill-transparent stroke-pri overflow-visible"
    >
      <circle id="moon-dark" r="4" cx="15" cy="15" />
      <circle id="moon-shadow" r="4" cx="18" cy="13" />
    </svg>
  );
}

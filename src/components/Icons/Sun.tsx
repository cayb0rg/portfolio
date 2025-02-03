import React from "react";

interface SunProps {
  size: number;
}

export default function Sun({ size }: SunProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 30 30"
      width={size}
      height={size}
      className="fill-transparent stroke-pri overflow-visible"
    >
      <circle r="4" cx="15" cy="15" />
      // Diagonal
      <line x1="8" x2="11" y1="8" y2="11" />
      <line x1="22" x2="19" y1="8" y2="11" />
      <line x1="19" x2="22" y1="19" y2="22" />
      <line x1="11" x2="8" y1="19" y2="22" />
      // Vertical
      <line x1="15" x2="15" y1="5" y2="9" />
      <line x1="15" x2="15" y1="21" y2="25" />
      // Horizontal
      <line x1="5" x2="9" y1="15" y2="15" />
      <line x1="21" x2="25" y1="15" y2="15" />
    </svg>
  );
}

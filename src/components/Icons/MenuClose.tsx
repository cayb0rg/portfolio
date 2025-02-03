import React from "react";

interface MenuIconProps {
  size: number;
}

export default function MenuIcon({ size }: MenuIconProps) {
  return (
    <svg role="img" viewBox="0 0 30 30" width="50" height="50">
      <rect id="menu-rect-horizontal" y="10" width="30" height="10" rx="5" />
      <rect id="menu-rect-vertical" x="10" width="10" height="30" rx="5" />
    </svg>
  );
}

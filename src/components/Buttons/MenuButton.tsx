import React from "react";
import MenuIcon from "../Icons/MenuClose";

interface MenuButtonProps {
  size: number;
  handleClick: (e: React.MouseEvent | React.KeyboardEvent) => void;
  isMenuOpen: boolean;
}

export default function MenuButton({ size, handleClick, isMenuOpen }: MenuButtonProps) {
  return (
    <button
      onClick={handleClick}
      onKeyDown={handleClick}
      className={`${isMenuOpen ? "" : ""}`}
      tabIndex={0}
    >
      <svg role="img" viewBox="0 0 30 30" width={size} height={size} className="fill-transparent stroke-pri overflow-visible">
        <rect
          className={`${
            !isMenuOpen
              ? "animate-xToHorizontal origin-center"
              : "animate-horizontalToX origin-center"
          }`}
          y="10"
          width="30"
          height="10"
          rx="5"
        />
        <rect
          className={`${
            !isMenuOpen
              ? "animate-xToVertical origin-center"
              : "animate-verticalToX origin-center"
          }`}
          x="10"
          width="10"
          height="30"
          rx="5"
        />
      </svg>
    </button>
  );
}

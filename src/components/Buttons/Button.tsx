import React from 'react';

interface ButtonProps {
  handleClick: (e: React.MouseEvent | React.KeyboardEvent) => void;
  children: React.ReactNode;
}

export default function Button ({ handleClick, children }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      onKeyDown={handleClick}
      className={`py-0 px-2 h-10 w-10 rounded-full flex items-center justify-center hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
};

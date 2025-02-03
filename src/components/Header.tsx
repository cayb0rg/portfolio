import React from 'react';
import MenuButton from './Buttons/MenuButton';
import Moon from './Icons/Moon';
import Sun from './Icons/Sun';
import Button from './Buttons/Button';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export default function Header({isMenuOpen, setIsMenuOpen, isDarkMode, setIsDarkMode}: HeaderProps) {

  function handleMenuClick(e: React.MouseEvent | React.KeyboardEvent) {
    if (e as React.KeyboardEvent && (e as React.KeyboardEvent).key != "Enter")
    {
      return;
    }
    setIsMenuOpen(!isMenuOpen);
  }

  function handleModeClick(e: React.MouseEvent | React.KeyboardEvent) {
    if (e as React.KeyboardEvent && (e as React.KeyboardEvent).key != "Enter")
    {
      return;
    }
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header>
      <div>
        <a href="/" tabIndex={0}>
          <h1>cay.sh</h1>
        </a>
      </div>
      <div className="flex flex-row items-center ">
        <Button handleClick={handleModeClick}>
          {!isDarkMode ?
            <Moon size={40} />
            :
            <Sun size={40} />
          }
        </Button>
        <MenuButton handleClick={handleMenuClick} isMenuOpen={isMenuOpen} size={50} />
      </div>
    </header>
  )
}

"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

interface ToggleModeProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

const ToggleMode: React.FC<ToggleModeProps> = ({ theme, setTheme }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null
  }

  const dark = theme === "dark"

  return (
    <Button
      variant="ghostIcon"
      size="icon"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
    >
      {dark ? (
        <Sun className='hover:cursor-pointer hover:text-primary' />
      ) : (
        <Moon className='hover:cursor-pointer hover:text-primary' />
      )}
    </Button>
  )
}

export default ToggleMode;


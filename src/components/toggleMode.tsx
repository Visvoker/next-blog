"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
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

export default ToggleMode


"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { dark } from '@clerk/themes';
import { SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import ToggleMode from '@/components/toggleMode';



export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="flex items-center justify-between px-2 h-20 bg-gray-200 dark:bg-gray-700 ">
      <div>
        <Link
          href="/"
          className='self-center text-lg font-semibold p-2'
        >
          <span className='px-2 py-1 '>
            Jame&apos;s
          </span>
          Blog
        </Link>
      </div>
      <div className="flex-1 max-w-sm mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border bg-gray-100 rounded"
        />
      </div>
      <div className="flex items-center justify-end gap-x-2">
        <ul className="flex gap-x- list-none mr-2 gap-x-5">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Projects</li>
        </ul>
        <ToggleMode theme={theme} setTheme={setTheme} />
        <div className='flex items-center gap-x-2'>
          <Button asChild variant="ghostIcon" >
            <SignInButton >
              <UserButton
                appearance={
                  {
                    baseTheme: theme === "dark" ? dark : undefined,
                  }
                }
              />
            </SignInButton>
          </Button>
          <SignedOut >
            <Button asChild>
              <Link href="/sign-in">
                Sign In
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header >
  )
}

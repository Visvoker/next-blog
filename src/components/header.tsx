"use client"

import React from 'react'
import Link from 'next/link';

import { Button } from './ui/button';
import ToggleMode from './toggleMode';

export const Header = () => {
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
      <div className="flex items-center justify-end">
        <ul className="flex gap-x- list-none mr-2">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Projects</li>
        </ul>
      </div>
      <div className='flex items-center gap-x-2'>
        <ToggleMode />
        <Button
          variant="outline"
        >
          Sign In
        </Button>
      </div>
    </header >
  )
}

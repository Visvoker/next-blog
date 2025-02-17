"use client"

import React from 'react'
import Link from 'next/link';

import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const path = usePathname();

  return (
    <header className="flex items-center justify-between px-4 h-16">
      <Link
        href="/"
        className='self-center text-lg font-semibold p-2'
      >
        <span className='px-2 py-1 '>
          Jame&apos;s
        </span>
        Blog
      </Link>
      <div className="flex-1 max-w-sm mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <nav className="mr-4">
        <ul className="flex space-x-4 list-none">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Projects</li>
        </ul>
      </nav>
      <div>
        <Button className="mr-4 p-2 border border-gray-300 rounded cursor-pointer">
          Toggle
        </Button>
        <Button
          variant="outline"
          className="border-2 border-gray-300  cursor-pointer"
          size="default">
          Sign In
        </Button>
      </div>
    </header>
  )
}

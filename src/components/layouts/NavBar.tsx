'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const NavBar = () => {
  const pathName = usePathname();
  return (
    <div className='hidden sm:flex gap-8 items-center w-max mx-auto px-4 py-2.5 my-4'>
      {navLinks.map((link) => <Link href={link.href} key={link.name} className={`${pathName === link.href && 'underline underline-offset-2 text-blue-500'} font-medium`}>{link.name}</Link>)}
    </div>
  )
}

export default NavBar
import Image from 'next/image'
import Link from 'next/link'

import { ThemeToggle } from '@/components/theme/ThemeToggle'

import { Nav } from './nav/Nav'

export function Header() {
  return (
    <header className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 lg:px-0">
      <Link href="/#" title="Home">
        <Image
          src="https://imgix.cosmicjs.com/503b4b60-749f-11ef-98d9-cbcb72f3073e-logo.png"
          alt="Logo"
          width={40}
          height={40}
        />
      </Link>
      <div className="flex items-center gap-2">
        <Nav />
        <ThemeToggle />
      </div>
    </header>
  )
}

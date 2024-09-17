import Image from 'next/image'
import Link from 'next/link'

import { Nav } from './nav/Nav'

export function Header() {
  return (
    <header className="mx-auto flex max-w-4xl items-end justify-between px-2 py-4">
      <Link href="/#" title="Home">
        <Image
          src="https://imgix.cosmicjs.com/503b4b60-749f-11ef-98d9-cbcb72f3073e-logo.png"
          alt="Logo"
          width={40}
          height={40}
        />
      </Link>
      <Nav />
    </header>
  )
}

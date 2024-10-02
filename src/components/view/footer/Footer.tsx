import Image from 'next/image'
import { PiArrowCircleUpRightLight } from 'react-icons/pi'

import { Button } from '@/components/ui/shadcn/button'

import Box from '../bento/Box'

const Footer = () => {
  return (
    <Box className="relative col-span-12 min-h-[14rem] border-none bg-gradient-to-b from-background to-neutral-300 dark:to-neutral-900">
      <h2 className="flex w-full items-center justify-between text-2xl font-light uppercase tracking-widest duration-500 ease-in-out md:text-4xl lg:text-5xl">
        <span className="animate-bounce">H</span>
        <span className="animate-bounce delay-75">I</span>
        <span className="animate-bounce delay-100">R</span>
        <span className="animate-bounce text-pink-500 delay-150">
          <div className="animate-spin">Ø</div>
        </span>
        <span className="animate-bounce delay-100">S</span>
        <span className="animate-bounce delay-75">H</span>
        <span className="animate-bounce">I</span>
      </h2>

      <div className="absolute bottom-4 left-4 flex flex-col gap-4">
        <a
          href="https://konbinicode.com"
          target="_blank"
          className="inline-flex items-center gap-2 text-xl duration-300 ease-in-out hover:font-semibold hover:brightness-150"
        >
          <Image
            alt="Konbini Web"
            src="https://imgix.cosmicjs.com/184b4670-748a-11ef-98d9-cbcb72f3073e-logo.png"
            width={32}
            height={32}
            quality={100}
          />
          Konbini Code
        </a>

        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/fernando_hiroshi/">
            <Button size="sm" variant="outline">
              Instagram
            </Button>
          </a>
          <a href="https://wa.me/5545988311915">
            <Button size="sm" variant="outline">
              Whatsapp
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-2 right-4">
        <a
          href="#"
          className="inline-flex opacity-80 duration-300 ease-in-out hover:-rotate-45 hover:scale-125 hover:opacity-100"
        >
          <PiArrowCircleUpRightLight className="animate-pulse hover:animate-none" size={52} />
        </a>
      </div>
    </Box>
  )
}

export default Footer

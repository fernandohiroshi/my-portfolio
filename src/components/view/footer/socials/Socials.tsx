import { MdOutlineWork } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'

import { Button } from '@/components/ui/shadcn/button'

import Box from '../../bento/Box'

export function Socials() {
  return (
    <Box className="col-span-12 border-none bg-transparent md:col-span-6">
      <h2 className="mb-2 text-xl font-medium tracking-widest text-amber-500 md:text-2xl">Contact Me</h2>
      <p className="text-justify text-xs text-foreground opacity-80 md:text-sm">
        If you prefer, send me an email and share your ideas!
      </p>
      <div className="my-8 flex gap-4">
        <a href="https://www.instagram.com/fernando_hiroshi" target="_blank">
          <Button variant="outline">Instagram</Button>
        </a>

        <a href="https://wa.me/5545988311915" target="_blank">
          <Button variant="outline">Whatsapp</Button>
        </a>
      </div>
      <a href="https://konbini-code.vercel.app" target="_blank" className="mb-4 flex items-center gap-2">
        <MdOutlineWork className="text-teal-500" />
        Konbini Web
      </a>
      <a href="https://maps.app.goo.gl/TzmFyJUTHsMKcnEP6" target="_blank" className="flex items-center gap-2">
        <SiGooglemaps className="text-red-500" /> Foz do iguaçu, Brazil
      </a>
    </Box>
  )
}

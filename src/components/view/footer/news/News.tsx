'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/shadcn/carousel'

import Box from '../../bento/Box'

const News = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))

  const items = [
    {
      image: 'https://imgix.cosmicjs.com/3da495c0-748a-11ef-98d9-cbcb72f3073e-s1_01.jpg',
      url: 'https://konbini-code.vercel.app/en',
      description: 'Konbini Code -  Websites development Services.',
    },
    {
      image: 'https://imgix.cosmicjs.com/3da495c0-748a-11ef-98d9-cbcb72f3073e-s1_01.jpg',
      url: 'https://konbini-code.vercel.app/en',
      description: 'Konbini Code -  Websites development Services.',
    },
    {
      image: 'https://imgix.cosmicjs.com/3da495c0-748a-11ef-98d9-cbcb72f3073e-s1_01.jpg',
      url: 'https://konbini-code.vercel.app/en',
      description: 'Konbini Code -  Websites development Services.',
    },
    {
      image: 'https://imgix.cosmicjs.com/3da495c0-748a-11ef-98d9-cbcb72f3073e-s1_01.jpg',
      url: 'https://konbini-code.vercel.app/en',
      description: 'Konbini Code -  Websites development Services.',
    },
  ]

  return (
    <Box className="col-span-12 md:col-span-6">
      <h2 className="text-center text-xl font-medium tracking-widest md:text-2xl">Last Updates</h2>
      <Carousel
        plugins={[plugin.current]}
        className="flex h-full w-full flex-col justify-evenly"
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="z-10">
          {items.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <a href={item.url} target="_blank">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={`Imagem ${index + 1}`}
                    width={500}
                    height={300}
                    className="h-52 w-full rounded-xl object-cover object-top duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </a>
              <p className="mt-4 text-center text-xs text-foreground opacity-80 lg:text-sm">{item.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="my-2 flex justify-end gap-2 lg:scale-100">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Box>
  )
}

export default News

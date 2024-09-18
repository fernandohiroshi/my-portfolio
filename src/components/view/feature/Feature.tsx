import { Button } from '@/components/ui/shadcn/button'

import Box from '../bento/Box'

const Feature = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly md:col-span-8">
      <h1 className="text-center text-3xl font-semibold md:text-start md:text-4xl">
        <span className="text-pink-500">Hello,</span> my name is Hirøshi <br />
        <span className="text-purple-500">How</span> are you?
      </h1>
      <p className="text-start text-xs md:text-sm">
        I&apos;m a web developer, with expertise on React, Next.js, TypeScript, Tailwind CSS.
      </p>
      <div className="flex items-center justify-end gap-4">
        <Button variant="secondary">Github</Button>
        <Button variant="secondary">Linkedin</Button>
      </div>
    </Box>
  )
}

export default Feature

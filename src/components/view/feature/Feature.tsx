import { Button } from '@/components/ui/shadcn/button'

import Box from '../bento/Box'

const Feature = () => {
  return (
    <Box className="col-span-12 flex flex-col justify-evenly md:col-span-8">
      <h1 className="text-start text-2xl font-semibold md:text-4xl">
        <span className="text-pink-500">Hello,</span> my name is Hirøshi <br />
        <span className="text-purple-500">How</span> are you?
      </h1>
      <a href="https://konbini-code.vercel.app/pt" target="_blank" className="text-start text-xs opacity-80 md:text-sm">
        I create modern websites with unique designs at{' '}
        <span className="animate-pulse font-medium underline">Konbini Web</span> .
      </a>
      <div className="flex items-center justify-end gap-4">
        <Button variant="outline">Github</Button>
        <Button variant="outline">Linkedin</Button>
      </div>
    </Box>
  )
}

export default Feature

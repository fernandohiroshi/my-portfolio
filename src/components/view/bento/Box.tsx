'use client'

import { motion, MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
} & MotionProps

const Box = ({ className, ...rest }: Props) => {
  return (
    <motion.div
      className={twMerge('col-span-4 min-h-[20rem] rounded-lg border bg-neutral-50 p-6 dark:bg-transparent', className)}
      {...rest}
    />
  )
}

export default Box

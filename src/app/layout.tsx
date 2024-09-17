import type { Metadata } from 'next'

import './globals.css'
import { Raleway } from 'next/font/google'

import { ThemeProvider } from '@/components/theme/provider'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fernando Hiroshi Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'
import { Raleway } from 'next/font/google'
import { Metadata } from 'next/types'

import { ThemeProvider } from '@/components/theme/provider'
import { Header } from '@/components/view/header/Header'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fernando Hiroshi Portfolio',
  description: '',
  icons: {
    icon: 'https://imgix.cosmicjs.com/503b4b60-749f-11ef-98d9-cbcb72f3073e-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

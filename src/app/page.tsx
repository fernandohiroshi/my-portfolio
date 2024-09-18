import { ThemeToggle } from '@/components/theme/ThemeToggle'
import Feature from '@/components/view/feature/Feature'

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-4">
        <div className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-4">
          <Feature />
        </div>
      </main>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </>
  )
}

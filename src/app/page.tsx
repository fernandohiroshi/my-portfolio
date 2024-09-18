import { ThemeToggle } from '@/components/theme/ThemeToggle'
import Avatar from '@/components/view/avatar/Avatar'
import Feature from '@/components/view/feature/Feature'

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-4">
        <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
          <Feature />
          <Avatar />
        </div>
      </main>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </>
  )
}

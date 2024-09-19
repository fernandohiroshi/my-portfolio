import { ThemeToggle } from '@/components/theme/ThemeToggle'
import About from '@/components/view/about/About'
import Animation from '@/components/view/animation/Animation'
import Avatar from '@/components/view/avatar/Avatar'
import Feature from '@/components/view/feature/Feature'
import Skills from '@/components/view/skills/Skills'

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-4">
        <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
          <Feature />
          <Avatar />
          <Animation />
          <About />
          <Skills />
        </div>
      </main>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </>
  )
}

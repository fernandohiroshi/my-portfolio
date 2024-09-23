import { ThemeToggle } from '@/components/theme/ThemeToggle'
import About from '@/components/view/about/About'
import Animation from '@/components/view/animation/Animation'
import Avatar from '@/components/view/avatar/Avatar'
import Feature from '@/components/view/feature/Feature'
import { Languages } from '@/components/view/languages/Languages'
import ProjectButton from '@/components/view/projectButton/ProjectButton'
import Skills from '@/components/view/skills/Skills'

export default function Home() {
  return (
    <>
      <main className="mb-16 min-h-screen px-4">
        <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
          <Feature />
          <Avatar />
          <Animation />
          <About />
          <Skills />
          <ProjectButton />
          <Languages />
        </div>
      </main>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </>
  )
}

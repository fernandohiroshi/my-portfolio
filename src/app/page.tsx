import About from '@/components/view/about/About'
import Animation from '@/components/view/animation/Animation'
import Avatar from '@/components/view/avatar/Avatar'
import Feature from '@/components/view/feature/Feature'
import Form from '@/components/view/footer/form/Form'
import { Languages } from '@/components/view/languages/Languages'
import ProjectButton from '@/components/view/projectButton/ProjectButton'
import Skills from '@/components/view/skills/Skills'

export default function Home() {
  return (
    <main className="mb-16 min-h-screen px-4">
      <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
        <Feature />
        <Avatar />
        <Animation />
        <About />
        <Skills />
        <ProjectButton />
        <Languages />
        <Form />
      </div>
    </main>
  )
}

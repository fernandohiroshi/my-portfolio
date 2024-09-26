import About from '@/components/view/about/About'
import Animation from '@/components/view/animation/Animation'
import Avatar from '@/components/view/avatar/Avatar'
import Feature from '@/components/view/feature/Feature'
import Form from '@/components/view/form/Form'
import Languages from '@/components/view/languages/Languages'
import News from '@/components/view/news/News'
import ProjectButton from '@/components/view/projectButton/ProjectButton'
import Skills from '@/components/view/skills/Skills'

export default function Home() {
  return (
    <main className="mb-8 min-h-screen px-4">
      <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
        <Feature />
        <Avatar />
        <Animation />
        <About />
        <Skills />
        <ProjectButton />
        <Languages />
        <News />
        <Form />
      </div>
      <p className="mt-8 text-center text-sm opacity-80">
        © {`${new Date().getFullYear()}`} Fernando Hiroshi. All rights reserved.
      </p>
    </main>
  )
}

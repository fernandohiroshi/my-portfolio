import { ThemeToggle } from '@/components/theme/ThemeToggle'

export default function Home() {
  return (
    <main>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </main>
  )
}

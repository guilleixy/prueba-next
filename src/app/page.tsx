import Hero from '@/components/index/Hero'
import LiveGames from '@/components/index/LiveGames'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Hero />
      <LiveGames />
    </main>
  )
}

import Hero from '../components/hero/Hero'
import Work from '../components/work/Work'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'

import style from './Home.module.css'

export default function Home() {
  return (
    <div className={style.base}>
      <Hero />
      <Work />
      <Blog />
      <Contact />
    </div>
  )
}

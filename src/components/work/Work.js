import React from 'react'
import style from './Work.module.css'

import Button from '../button/Button'
import Card from './workCard/workCard'

import quicktrailer from '../../assets/images/quicktrailers-mockup-min.png'
import afexpress from '../../assets/images/afexpress-mockup-min.png'
// import dualsense from '../../assets/images/controller-mockup.png'
import vl from '../../assets/images/vl-mockup-min.png'
// import liftYourself from '../../assets/images/lift-yourself-mockup.png'

const Work = () => {

  const projects = [
    {
      "image": afexpress,
      "title": "AF Express NFT",
      "description": "Non-fungible, but oh so delicious. I created an NFT collection of popular asian foods and this website displays each dish in all its glory. Now listed on Magic Eden, the most popular Solana NFT marketplace.",
      "live": "https://www.afexpress.art",
      "tech": [
        "React",
        "Router",
        "Framer Motion",
        "Crypto",
        "Solana",
        "NFT"]
    },
    {
      "image": vl,
      "title": "Virtual Learning Online",
      "tech": ["WordPress", "LearnDash LMS", "Woocommerce", "Elementor Pro"],
      "description": "I learned a lot during this project and was the lead in both design and development. Main features include a learning management system, a group dashboard, Woocommerce & CRM integration.",
      "live": "https://www.virtuallearnonline.com",
      "code": "https://codepen.io/dnnysng/pen/zYwpgpL",
    },
    {
      "image": quicktrailer,
      "title": "Quick Trailers",
      "description": "This react web application is connected to The Movie Database API and provides users with quick access to movie trailers by name. Results are displayed in a grid with the movie title and rating at a glance.",
      "live": "https://thirsty-boyd-4fd3cf.netlify.app/",
      "github": "https://github.com/dnnysng/quick-trailers",
      "tech": ["React", "Rest API", "TheMovieDB"]
    },
    // {
    //   "image": liftYourself,
    //   "title": "Lift Yourself: Calisthenics",
    //   "tech": ["React", "DayJS"],
    //   "description": "Lift Yourself takes the complexity out of tracking your calisthenics workouts. Simply choose your workout type and track what's important... the sets and reps!",
    //   "live": "https://www.liftyourself.app",
    //   "github": "https://github.com/dnnysng/lift-yourself",
    //   "cardVariant": "mobileThumbnail"
    // },
    // {
    //   "image": dualsense,
    //   "title": "DualSense Wireless Controller",
    //   "description": "This fullscreen featured product page showcases the Dualsense Wireless Controller and it's variety of new colors.",
    //   "live": "https://dazzling-villani-5961ae.netlify.app/",
    //   "github": "https://github.com/dnnysng/fullscreen-featured-product",
    //   "tech": ["React", "Figma"]
    // },
  ]

  return (
    <section className={style.block}>
      <div className={style.wrapper}>
        <Button
          className={style.button}
          variant="transparent"
          href="#work"
          label="featured work"
        />
        <p id="work" className={style.anchor}></p>
        {projects.map(project =>
          <Card
            image={project.image}
            title={project.title}
            description={project.description}
            live={project.live}
            github={project.github}
            code={project.code}
            cardVariant={project.cardVariant}
            tech={project.tech}
          />
        )}
      </div>
    </section>
  )
}

export default Work
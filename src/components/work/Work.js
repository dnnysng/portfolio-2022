import React from 'react'
import style from './Work.module.css'

import Button from '../button/Button'
import Card from './workCard/workCard'

import quicktrailer from '../../assets/images/quicktrailers-mockup-min.png'
import afexpress from '../../assets/images/afexpress-mockup-min.png'
import dualsense from '../../assets/images/fullscreen-product-mockup-min.png'

const Work = () => {

  const projects = [
    {
      "image": afexpress,
      "title": "AF Express NFT",
      "description": "Non-fungible, but oh so delicious. This site is serves as the portal for the AF Express NFT community. A group dedicated to the love of Asian foods.",
      "live": "https://www.afexpress.art"
    },
    {
      "image": quicktrailer,
      "title": "Quick Trailers",
      "description": "Thinking about watching a movie, but not quite sure about it yet? Use this app to search for it and get a quick rating and trailer link.",
      "live": "https://thirsty-boyd-4fd3cf.netlify.app/",
      "github": "https://github.com/dnnysng/quick-trailers"
    },
    {
      "image": dualsense,
      "title": "DualSense Wireless Controller",
      "description": "This fullscreen featured product page showcases the Dualsense Wireless Controller and it's variety of new colors.",
      "live": "https://dazzling-villani-5961ae.netlify.app/",
      "github": "https://github.com/dnnysng/fullscreen-featured-product"
    },
  ]

  return (
    <section className={style.work}>
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
        />
      )}
    </section>
  )
}

export default Work
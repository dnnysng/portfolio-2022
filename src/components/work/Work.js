import React from 'react'
import style from './Work.module.css'

import LinkButton from '../link-button/LinkButton'
import WorkCard from './work-card/WorkCard'

import quicktrailer from '../../assets/images/quicktrailers-mockup-min.png'
import afexpress from '../../assets/images/afexpress-mockup-min.png'
// import dualsense from '../../assets/images/controller-mockup.png'
import vl from '../../assets/images/vl-mockup-min.png'
import liftYourself from '../../assets/images/lift-yourself-mockup.png'

const Work = () => {

  const projects = [
    {
      "image": afexpress,
      "title": "AF Express NFT",
      "description": "This react web application serves as the hub for the AF Express NFT collection on Solana. Its pages are routed with react-router, animated using framer motion, and provide an NFT dashboard to retrieve token data fetched from the Magiceden API.",
      "live": "https://www.afexpress.art",
      "tech": [
        "React",
        "Framer Motion",
        "Cryptocurrencies",
        "Solana Blockchain",
        "NFTs"
      ]
    },
    {
      "image": vl,
      "title": "Virtual Learning Online",
      "tech": ["WordPress", "LearnDash LMS", "Woocommerce", "Elementor Pro"],
      "description": "This online learning platform was built using WordPress, Woocommerce, and LearnDash. Features CRM integration for forms, registrations, and subscriptions. Has automated processes for emails, certificates, and blog posts.",
      "live": "https://www.virtuallearnonline.com",
      "link": "https://codepen.io/dnnysng/pen/zYwpgpL",
      "linkType": "Sample Code"
    },
    {
      "image": liftYourself,
      "title": "Lift Yourself: Calisthenics",
      "tech": ["React", "Mantine", "DayJS"],
      "description": "This responsive web application is built using React and styled using the Mantine UI library. It allows users to track their progress and stay motivated while unlocking daily badges!",
      "live": "https://www.liftyourself.app",
      "link": "https://github.com/dnnysng/lift-yourself-app",
      "linkType": "Github"
    },
    {
      "image": quicktrailer,
      "title": "Quick Trailers",
      "description": "This react web application is connected to The Movie Database API and provides users with quick access to movie trailers by name. Results are displayed in a grid with the movie title and rating at a glance.",
      "live": "https://thirsty-boyd-4fd3cf.netlify.app/",
      "link": "https://github.com/dnnysng/quick-trailers",
      "linkType": "Github",
      "tech": ["React", "Rest API", "TheMovieDB"]
    },
  ]

  return (
    <section className={style.block}>
      <div className={style.container}>
        <LinkButton
          className={style.button}
          variant="transparent"
          href="#work"
          label="featured work"
        />
        <p id="work" className={style.anchor}></p>
        {projects.map((project, index) =>
          <WorkCard
            image={project.image}
            title={project.title}
            description={project.description}
            live={project.live}
            link={project.link}
            linkType={project.linkType}
            cardVariant={project.cardVariant}
            tech={project.tech}
            key={index}
            index={index}
          />
        )}
      </div>
    </section>
  )
}

export default Work

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import style from './featuredWork.module.css'

import game from '../../assets/images/game-thumbnail.png'
import aff from '../../assets/images/aff-thumbnail.png'
import trailers from '../../assets/images/trailers-thumbnail.png'
import coondex from '../../assets/images/coondex-thumbnail.png'

import TransparentButton from '../button/transparentButton'

const featuredWork = () => {

  function SlideUpWhenVisible({ children }) {
    return (
      <AnimatePresence>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { marginTop: "2rem" },
            hidden: { marginTop: "20rem" }
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <section className={style.featuredWork}>
      <TransparentButton href="#featuredWork" label="featured work" />
      <SlideUpWhenVisible>
        <div
          id="featuredWork"
          className={style.featuredWorkWrapper}
        >
          <div className={style.featuredWorkLeft}>
            <img className={style.image} src={game} alt="" />
            <img className={style.image} src={aff} alt="" />
          </div>
          <div className={style.featuredWorkRight}>
            <img className={style.image} src={trailers} alt="" />
            <img className={style.image} src={coondex} alt="" />
          </div>
        </div>
      </SlideUpWhenVisible>
    </section>
  )
}

export default featuredWork
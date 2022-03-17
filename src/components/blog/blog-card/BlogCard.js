import sanitizeHtml from 'sanitize-html'
import dayjs from 'dayjs'

import style from './BlogCard.module.css'

export default function BlogCard({
  description,
  thumbnail,
  link,
  date,
  title
}) {

  // clean blog excerpt
  const dirtyHtml = description
  const cleanHtml = sanitizeHtml(dirtyHtml, {
    allowedTags: [],
    nonTextTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'figcaption']
  })

  // format date
  const formattedDate = dayjs(date).format('MMM DD, YYYY')

  return (
    <article className={style.container}>
      <a className={style.imageWrapper} href={link} target="blank_">
        <img className={style.image} src={thumbnail} alt={`Thumbnail for "${title}" blog post.`} />
      </a>
      <section className={style.content}>
        <a className={style.title} href={link} target="blank_">{title}</a>
        <p className={style.excerpt}>{cleanHtml}</p>
        <footer className={style.footer}>
          <time className={style.date}>{formattedDate}</time>
          <a className={style.readMore} href={link} target="blank_">Read More</a>
        </footer>
      </section>
    </article>
  )
}

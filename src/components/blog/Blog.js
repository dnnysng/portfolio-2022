import React, { useState, useEffect } from 'react'

import Card from './blog-card/BlogCard'

import style from './Blog.module.css'

export default function LatestUpdates() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([])

  // grab most recent posts from medium
  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.medium.com%2Ffeed%2F%40dannyseng&api_key=r0xpcslhqezp8mcrrgg8meveoeyzvmjyxpq6hds3&order_dir=desc&count=4")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result.items)
        },
      )
      .catch(
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const backupPosts = [
    {
      description: "Contact forms are a convenient way for users to reach out to you or your business. Behind the scenes, there are a variety of ways to set up a form on your website...",
      thumbnail: "https://cdn-images-1.medium.com/max/1024/0*Bu7yi5dyqw_7YHEV",
      link: "https://dannyseng.medium.com/setting-up-a-netlify-contact-form-in-your-react-web-application-2f6241df8dbe?source=rss-5a9aa2716688------2",
      date: "Mar 08, 2022",
      title: "Setting Up a Netlify Contact Form in Your React Web Application"
    },
    {
      description: "WordPress is the world’s most popular content management system in the world. Like me, you may end up working on WordPress websites at some point...",
      thumbnail: "https://cdn-images-1.medium.com/max/1024/0*PXGU4wPukXYyYgas",
      link: "https://dannyseng.medium.com/using-wordpress-as-a-headless-cms-with-react-as-the-frontend-68239005a349",
      date: "Feb 27, 2022",
      title: "Using WordPress as a Headless CMS With React as the Frontend"
    },
    {
      description: "The use of custom fonts is often overlooked in web design. The right choices can be the difference in how people perceive your brand or service. This is why...",
      thumbnail: "https://cdn-images-1.medium.com/max/1024/0*xfWmnJuHuRDyBQYw",
      link: "https://dannyseng.medium.com/how-to-use-google-fonts-in-your-react-js-projects-a73d45eb8d59?source=rss-5a9aa2716688------2",
      date: "Feb 25, 2022",
      title: "How to Use Google Fonts in Your React.js Projects"
    }
  ]

  if (error || !isLoaded) {
    return (
      <section className={style.block}>
        {error && console.log(error)}
        <div className={style.container}>
          <a
            className="headingWrapper"
            href="#latestUpdates"
            label="latest updates"
          >
            <h3 className={style.heading}>Latest Updates</h3>
          </a>
          <p id="latestUpdates" className={style.anchor}></p>
          <div className={style.cards}>
            {backupPosts.map(post =>
              <Card
                key={post.title}
                title={post.title}
                date={post.date}
                thumbnail={post.thumbnail}
                description={post.description}
                link={post.link}
              />
            )}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className={style.block}>
        <div className={style.container}>
          <a
            className="headingWrapper"
            href="#latestUpdates"
            label="latest updates"
          >
            <h3 className={style.heading}>Latest Updates</h3>
          </a>
          <p id="latestUpdates" className={style.anchor}></p>
          <div className={style.cardsContainer}>
            {posts.map(post =>
              <Card
                key={post.title}
                title={post.title}
                date={post.pubDate}
                thumbnail={post.thumbnail}
                description={post.description}
                link={post.link}
              />
            )}
          </div>
        </div>
      </section>
    );
  }
}
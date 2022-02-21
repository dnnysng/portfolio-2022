import React, { useState, useEffect } from 'react'
import style from './Blog.module.css'
import Button from '../button/Button'

import Card from '../card/Card'

const LatestUpdates = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.medium.com%2Ffeed%2F%40dannyseng&api_key=r0xpcslhqezp8mcrrgg8meveoeyzvmjyxpq6hds3&order_dir=desc&count=6")
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={style.wrapper}>
        <Button
          variant="transparent"
          href="#blog"
          label="latest updates"
        />
        <div className={style.cards}>
          {posts.map(post => <Card
            title={post.title}
            date={post.pubDate}
            thumbnail={post.thumbnail}
            description={post.description}
            link={post.link}
          />)}
        </div>
      </div>
    );
  }
}

export default LatestUpdates
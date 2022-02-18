import React, { useState, useEffect } from 'react'
import style from './Blog.module.css'
import theme from '../../App.module.css'
import Button from '../button/Button'

import Card from '../card/Card'

const LatestUpdates = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40dannyseng&api_key=j8sqtkrffgu2hsgzry8rkcdjrxewuk8brhyxjqug")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  console.log(posts)

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={style.wrapper}>
        <Button
          variant="transparent"
          href="#latestUpdates"
          label="latest updates"
        />
        <div className={style.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default LatestUpdates
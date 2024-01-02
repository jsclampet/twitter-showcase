import "./Showcase.css";
import TweetCard from "../../components/TweetCard/TweetCard";
import { Tweet } from "../../components/TweetCard/TweetCard";
import axios from "axios";
import { useState } from "react";

const Showcase = () => {
  const defaultTweet = {
    tweet_text: "I would like to die on Mars. Just not on impact.",
    username: "theMusk",
    profile_image_url:
      "https://freight.cargo.site/t/original/i/6e90ef32471e05d8bfd029d6d5877119439b23c2989a55cf182b99c54303f4fa/MS_Musk_Elon_CloseUp.jpg",
    retweet_count: 15,
    like_count: 67,
  };

  const [tweet, setTweet] = useState<Tweet>(defaultTweet);

  const getTweet = () => {
    axios.get("http://localhost:3002/api/showcase").then((response) => {
      setTweet(response.data);
    });
  };

  return (
    <div className="showcase-container">
      <button onClick={() => getTweet()}>Generate Tweet</button>
      <div className="showcase-tweet">
        {tweet && <TweetCard tweetData={tweet} />}
      </div>
    </div>
  );
};

export default Showcase;

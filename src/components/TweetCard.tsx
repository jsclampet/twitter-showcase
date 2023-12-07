import { useState } from "react";
import "./TweetCard.css";

interface Tweet {
  message: string;
  username: string;
  avatar: string;
  retweetCount: number;
  favoritedCount: number;
}

const TweetCard = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const placeHolderData = [
    {
      message: "I would like to die on Mars. Just not on impact.",
      username: "theMusk",
      avatar:
        "https://freight.cargo.site/t/original/i/6e90ef32471e05d8bfd029d6d5877119439b23c2989a55cf182b99c54303f4fa/MS_Musk_Elon_CloseUp.jpg",
      retweetCount: 5,
      favoritedCount: 6,
    },
  ];

  return (
    <>
      {placeHolderData.map((data) => {
        return (
          <div className="tweet-card">
            <img className="avatar" src={data.avatar} alt="" />
            <div className="content">
              <h4>{data.username} ✓</h4>
              <p>{data.message}</p>
              <div className="icons">
                <p>⏎ {data.retweetCount}</p>
                <p>❤️ {data.favoritedCount}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TweetCard;

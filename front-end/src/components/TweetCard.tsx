import { useState } from "react";
import "./TweetCard.css";
import React from "react";

interface Tweet {
  message: string;
  username: string;
  avatar: string;
  retweetCount: number;
  favoritedCount: number;
}

const TweetCard = () => {
  // const [tweets, setTweets] = useState<Tweet[]>([]);

  const placeHolderData = [
    {
      message: "I would like to die on Mars. Just not on impact.",
      username: "theMusk",
      avatar:
        "https://freight.cargo.site/t/original/i/6e90ef32471e05d8bfd029d6d5877119439b23c2989a55cf182b99c54303f4fa/MS_Musk_Elon_CloseUp.jpg",
      retweetCount: 15,
      favoritedCount: 67,
    },
    {
      message: "Thought the Rockys would be a little more Rockier than this.",
      username: "CarreyOn",
      avatar:
        "https://media.vanityfair.com/photos/624741675aff4c9d7bffcde5/master/w_2560%2Cc_limit/1200532431",
      retweetCount: 23,
      favoritedCount: 86,
    },
    {
      message: "Turn the other cheek!",
      username: "ChrisRock",
      avatar:
        "https://pyxis.nymag.com/v1/imgs/dbb/40a/1c33a5e41ae300e84f72b8f82583da2b9d-chris-rock-1.2x.rsquare.w330.jpg",
      retweetCount: 43,
      favoritedCount: 93,
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

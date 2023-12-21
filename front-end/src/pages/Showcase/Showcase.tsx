import "./Showcase.css";
import TweetCard from "../../components/TweetCard";
import { Tweet } from "../../components/TweetCard";

const Showcase = () => {
  const placeHolderData: Tweet = {
    message: "I would like to die on Mars. Just not on impact.",
    username: "theMusk",
    profile_image_url:
      "https://freight.cargo.site/t/original/i/6e90ef32471e05d8bfd029d6d5877119439b23c2989a55cf182b99c54303f4fa/MS_Musk_Elon_CloseUp.jpg",
    retweet_count: 15,
    like_count: 67,
  };

  return (
    <div className="showcase-container">
      <TweetCard tweetData={placeHolderData} />
    </div>
  );
};

export default Showcase;

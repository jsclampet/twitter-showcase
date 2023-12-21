import "./TweetCard.css";

export interface Tweet {
  message: string;
  username: string;
  profile_image_url: string;
  retweet_count: number;
  like_count: number;
}

interface Props {
  tweetData: Tweet;
}

const TweetCard = ({ tweetData }: Props) => {
  return (
    <>
      <div className="tweet-card">
        <img
          className="profile_image_url"
          src={tweetData.profile_image_url}
          alt=""
        />
        <div className="content">
          <h4>{tweetData.username} ✓</h4>
          <p>{tweetData.message}</p>
          <div className="icons">
            <p>⏎ {tweetData.retweet_count}</p>
            <p>❤️ {tweetData.like_count}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetCard;

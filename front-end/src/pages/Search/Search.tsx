import { useState } from "react";
import "./Search.css";
import axios from "axios";
import TweetCard, { Tweet } from "../../components/TweetCard/TweetCard";
import { useForm } from "react-hook-form";

interface FormValues {
  username: string;
  tweet: string;
}

const Search = () => {
  const [apiOption, setApiOption] = useState("tweet");
  const [searchQuery, setSearchQuery] = useState("");
  const [tweets, setTweets] = useState<Tweet[]>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = () => {
    apiOption === "tweet"
      ? axios
          .get(`http://localhost:3002/api/tweets/${searchQuery}`)
          .then(({ data }) => setTweets(data))
      : axios
          .get(`http://localhost:3002/api/users/${searchQuery}`)
          .then(({ data }) => setTweets(data));
  };

  let input;
  if (apiOption === "tweet") {
    input = (
      <input
        {...register("tweet", {
          maxLength: {
            value: 30,
            message: "For optimal results, keep search to 30 character maximum",
          },
        })}
        onInput={(e) => {
          setSearchQuery(e.currentTarget.value);
        }}
        type="text"
        placeholder={"Search by tweet content"}
      />
    );
  } else if (apiOption === "user") {
    input = (
      <input
        {...register("username", {
          minLength: {
            value: 4,
            message: "Please enter at LEAST 4 characters",
          },
          maxLength: {
            value: 15,
            message: "You can only enter a maximum of 15 characters",
          },
          validate: (fieldValue) => {
            return (
              !fieldValue.includes(" ") || "Username cannot include any spaces."
            );
          },
        })}
        onInput={(e) => {
          setSearchQuery(e.currentTarget.value);
        }}
        type="text"
        placeholder={" Search by username. Do not include any spaces."}
      />
    );
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="search-bar">
          <select
            onChange={(option) => {
              setApiOption(option.target.value);
            }}
          >
            <option value="tweet">TWEET</option>
            <option value="user">USER</option>
          </select>
          {input}
          <button type="submit">Search</button>
        </div>
        {errors.username && (
          <span className="error-message">{errors.username.message}</span>
        )}
        {errors.tweet && (
          <span className="error-message">{errors.tweet.message}</span>
        )}
      </form>
      <div className="tweets-container">
        {tweets &&
          tweets.map((tweet) => {
            return (
              <div key={crypto.randomUUID()} className="tweet-div">
                <TweetCard tweetData={tweet} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;

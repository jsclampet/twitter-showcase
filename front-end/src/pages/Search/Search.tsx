import { FormEvent, useState } from "react";
import "./Search.css";
import axios from "axios";
import TweetCard, { Tweet } from "../../components/TweetCard/TweetCard";
import { FieldValues, useForm } from "react-hook-form";

const Search = () => {
  const [apiOption, setApiOption] = useState("tweet");
  const [searchQuery, setSearchQuery] = useState("");
  const [tweets, setTweets] = useState<Tweet[]>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = () => {
    apiOption === "tweet"
      ? axios
          .get(`http://localhost:3002/api/tweets/${searchQuery}`)
          .then(({ data }) => setTweets(data))
      : axios
          .get(`http://localhost:3002/api/users/${searchQuery}`)
          .then(({ data }) => setTweets(data));
    console.log(errors);
    reset();
  };

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
          <input
            onInput={(e) => {
              setSearchQuery(e.currentTarget.value);
            }}
            type="text"
            placeholder={
              apiOption === "tweet"
                ? "Search by tweet content"
                : " Search by username. Do not include any spaces."
            }
          />
          <button disabled={isSubmitting} type="submit">
            Search
          </button>
        </div>
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

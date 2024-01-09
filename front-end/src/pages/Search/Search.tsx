import { useState } from "react";
import "./Search.css";
import axios from "axios";
import TweetCard, { Tweet } from "../../components/TweetCard/TweetCard";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Search = () => {
  const [apiOption, setApiOption] = useState("tweet");
  const [searchQuery, setSearchQuery] = useState("");
  const [tweets, setTweets] = useState<Tweet[]>();

  const userSchema = z
    .object({
      username: z.string().trim().optional(),
      tweet: z.string().min(1),
    })
    .refine(
      ({ username }) => {
        if (username) !username.includes(" ");
      },
      {
        message: "Username cannot contain any spaces!",
        path: ["username"],
      }
    );

  type userSchemaType = z.infer<typeof userSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<userSchemaType>({ resolver: zodResolver(userSchema) });

  const onSubmit = () => {
    apiOption === "tweet"
      ? axios
          .get(`http://localhost:3002/api/tweets/${searchQuery}`)
          .then(({ data }) => setTweets(data))
      : axios
          .get(`http://localhost:3002/api/users/${searchQuery}`)
          .then(({ data }) => setTweets(data));
  };

  const input =
    apiOption === "tweet" ? (
      <input
        {...register("tweet")}
        onInput={(e) => {
          setSearchQuery(e.currentTarget.value);
        }}
        type="text"
        placeholder={"Search by tweet content"}
      />
    ) : (
      <input
        {...register("username")}
        onInput={(e) => {
          setSearchQuery(e.currentTarget.value);
        }}
        type="text"
        placeholder={" Search by username. Do not include any spaces."}
      />
    );

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
          <span className="username-error-message">
            {errors.username.message}
          </span>
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

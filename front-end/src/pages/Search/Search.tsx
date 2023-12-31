import { useState } from "react";
import "./Search.css";
import axios from "axios";

const Search = () => {
  const [apiOption, setApiOption] = useState("tweet");
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = () => {
    apiOption === "tweet"
      ? axios.post(`http://localhost:3002/api/tweets/`, searchQuery)
      : axios.post(`http://localhost:3002/api/users/`, searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
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
          onInput={(e) => setSearchQuery(e.currentTarget.value)}
          type="text"
          placeholder="Search by user or tweet content"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;

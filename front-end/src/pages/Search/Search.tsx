import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [apiOption, setApiOption] = useState("");
  const handleSubmit = (apiUrl) => {};

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
        <input type="text" placeholder="Search by user or tweet content" />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;

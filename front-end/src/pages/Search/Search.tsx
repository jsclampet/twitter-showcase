import "./Search.css";

const Search = () => {
  return (
    <form className="search-container">
      <div className="search-bar">
        <input type="text" placeholder="Search by user or tweet content" />
        <select>
          <option value="tweet">tweet</option>
          <option value="user">user</option>
        </select>
      </div>
    </form>
  );
};

export default Search;

import React, {useState} from "react";

function Search({onSubmitSearch}) {
  const [searchValue, setSearchBar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log("submitted", searchValue);
    onSubmitSearch(searchValue)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

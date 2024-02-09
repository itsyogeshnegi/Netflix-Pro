import React, { useState } from "react";
import { debounce } from "lodash";
import "./SearchMore.css";
import OtherNavBar from "../../Component/OtherNavBar/OtherNavBar";

const SearchMore = () => {
  const API_KEY = "01119e8533d38c65e3f92ff109a11b3b";
  let imageURL = "https://image.tmdb.org/t/p/original";

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Debounce the handleSearch function
  const debouncedSearch = debounce(async query => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US`
      );
      const data = await response.json();
      setSearchResults(data.results);
      console.log(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 300); // Adjust the debounce delay as needed

  const handleSearch = query => {
    debouncedSearch(query);
  };

  // Trigger search when input changes
  const handleChange = e => {
    const query = e.target.value;
    setSearchTerm(query);
    handleSearch(query); // Call debounced handleSearch when input changes
  };

  // ... (previous code)

  return (
    <>
      <OtherNavBar />
      <div
        className="SearchMore"
        style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          placeholder="Search Movies"
          value={searchTerm}
          onChange={handleChange} // Call handleChange on input change
        />
      </div>
      <div className="searchResults">
        {searchResults.length === 0 && searchTerm.length > 0 && (
          <div className="noResultsMessage" style={{ color: "white" }}>
           <h1> No results found. Please try another search.</h1>
          </div>
        )}

        {searchResults.map(result => (
          <div
            className="searchCard"
            key={result.id}
            style={{ color: "white" }}>
            <img
              src={imageURL + result.poster_path}
              alt={result.id}
              style={{ width: "200px", height: "100%" }}
            />
          </div>
        ))}

        {searchTerm.length === 0 && (
          <div className="typeSomethingMessage" style={{ color: "white" }}>
            <h1> Please type something to search.</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchMore;

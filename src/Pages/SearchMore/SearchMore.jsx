import React, { useState } from "react";
import "./SearchMore.css";
import OtherNavBar from "../../Component/OtherNavBar/OtherNavBar";

const SearchMore = () => {
  const API_KEY = "01119e8533d38c65e3f92ff109a11b3b";
  let searchMovie = "https://api.themoviedb.org/3/search/movie";
  let imageURL = "https://image.tmdb.org/t/p/original";

  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&include_adult=false&language=en-US`
      );
      const data = await response.json();
      setSearchResults(data.results);
      console.log(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Trigger search when input changes
  const handleChange = e => {
    setSearchTerm(e.target.value);
    handleSearch(); // Call handleSearch when input changes
  };

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
        {searchResults.map(result => {
          console.log(result);
          return (
            <div
              className="searchCard"
              key={result.id}
              style={{ color: "white" }}>
              {/* {result.title} */}
              <img
                src={imageURL + result.poster_path}
                alt={result.id}
                style={{ width: "200px", height: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchMore;

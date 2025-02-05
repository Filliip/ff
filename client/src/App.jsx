import React, { useState } from "react";
import Approutes from "./pages/Approutes";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";

export default function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <div className="App">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          <SearchResultList results={results} />
        </div>
      </div>

      

      <Approutes />
    </>
  );
}

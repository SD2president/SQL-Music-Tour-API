import { useState, useEffect, useRef } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { DataContext } from "./context/DataContext";
import { SearchContext } from "./context/SearchContext";
import "./App.css";

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music");
  let [data, setData] = useState([]);
  let searchInput = useRef("");

  useEffect(() => {}, [search]);

  const handleSearch = (e, search) => {
    e.preventDefault();
    const fetchData = async () => {
      document.title = `${search} Music`;
      const response = await fetch(
        `https://itunes.apple.com/search?term=${search}`
      );
      const resData = await response.json();
      console.log(resData);
      if (resData.results.length) {
        setData(resData.results);
      } else {
        setMessage(`we could find nothing for "${search}"`);
      }

      
    };
    if (search) {
      try {
        fetchData();
      } catch (e) {}
    }
  };

  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          term: searchInput,
          handleSearch,
        }}
      >
        <SearchBar />
      </SearchContext.Provider>

      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;

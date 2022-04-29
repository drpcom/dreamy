import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ allArticles }) => {
  const [filteredData, setFilteredData] = useState([]);

  let useClickOutside = (handler) => {
    let domNode = useRef();
    useEffect(() => {
      let maybeHandler = (e) => {
        if (domNode.current && !domNode.current.contains(e.target)) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    }, [handler]);

    return domNode;
  };

  let data = [];
  allArticles.forEach((article) => {
    data.push(article.route);
    // console.log(data)
  });

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });
    searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
  };

  let domNode = useClickOutside(() => {
    setFilteredData([]);
  });

  const clearResults = () => {
    setFilteredData([]);
  };
  return (
    <>
      <div className="article-search-input">
        <input
          type="text"
          placeholder="Search Articles"
          onChange={handleFilter}
        />
        <div className="search-icon"></div>
      </div>
      {filteredData.length !== 0 && (
        <div
          className="article-data-result"
          ref={domNode}
          onClick={clearResults}
        >
          {filteredData.slice(0, 15).map((value, i) => {
            return (
              <Link
                to={`/articles/${value}`}
                key={i}
                className="article-search-link"
              >
                {value.replace(/-/g, " ")}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchBar;

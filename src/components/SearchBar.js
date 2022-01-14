import React,{ useState, useRef, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({allArticles, allTags}) => {

    const [filteredData, setFilteredData] = useState([]);

    let useClickOutside = (handler) => {
        let domNode = useRef()
        useEffect(() => {
            let maybeHandler = (e) => {
            if (!domNode.current.contains(e.target)) {
                handler();
            }
            };
    
            document.addEventListener("mousedown", maybeHandler)
            
            return () => {
                document.removeEventListener("mousedown", maybeHandler)
            }
        });

        return domNode;
    }

    let data = [];
    allArticles.forEach((article) => {
        data.push(article.route);
        console.log(data)
    })
    allTags.forEach((tag) => {
        data.push(tag.id)
        console.log(data)
    })

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        const newFilter = data.filter((value => {
            return value.toLowerCase().includes(searchWord.toLowerCase());
        }))
        searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter)
    }

    let domNode = useClickOutside(() => {
        setFilteredData([]);
    })

    const clearResults = () => {
        setFilteredData([])
    }
    return (
        <>
            <div className="search-input">
                <input type="text" placeholder='Search' onChange={handleFilter} />
                <div className="search-icon"></div>
            </div>
            {filteredData.length !== 0 && (
            <div className="data-result" ref={domNode} onClick={clearResults}>
                {filteredData.slice(0, 15).map((value, i) => {
                    return <a href={value} key={i} className="search-link">{value}</a>
                })}
            </div>
            )}
        </>
    )
}

export default SearchBar

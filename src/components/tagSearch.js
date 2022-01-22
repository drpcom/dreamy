import React,{ useState, useRef, useEffect } from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';

const SearchBar = ({allTags}) => {

    const [filteredData, setFilteredData] = useState([]);

    let useClickOutside = (handler) => {
        let domNode = useRef()
        useEffect(() => {
            let maybeHandler = (e) => {
            if (domNode.current && !domNode.current.contains(e.target)) {
                handler();
            }
            };
    
            document.addEventListener("mousedown", maybeHandler)
            
            return () => {
                document.removeEventListener("mousedown", maybeHandler)
            }
        },[handler]);

        return domNode;
    }

    let data = [];
    allTags.forEach((tag) => {
        data.push(tag.id)
        // console.log(data)
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
            <div className="tag-search-input">
                <input type="text" placeholder='Search Tags' onChange={handleFilter} />
                <div className="search-icon"></div>
            </div>
            {filteredData.length !== 0 && (
            <div className="tag-data-result" ref={domNode} onClick={clearResults}>
                {filteredData.slice(0, 15).map((value, i) => {
                    return <Link to={value} key={i} className="tag-search-link">{value}</Link>
                })}
            </div>
            )}
        </>
    )
}

export default SearchBar

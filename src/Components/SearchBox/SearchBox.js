import React from "react";
import "./SearchBox.css"

const SearchBox = ({onInputChange})=>{
    return(
        <div className="search-component">
            <input
            onChange={(event)=>onInputChange(event.target.value)}
            type="text" 
            placeholder="Type relevant keywords" 
            className="search-input" 
            />
        </div>
    )
}


export default SearchBox;
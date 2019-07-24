import React from "react";

const Search = ({onSearchChange}) => {
    return (
        <div>
            <input 
                className="pa3 ba b--blue bg-lightest-blue bw2 mb4"
                type="search"
                placeholder="search cards"
                onChange={onSearchChange}
            />
        </div>
    );
};

export default Search; 
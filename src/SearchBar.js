import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {

    processSearch(e) {
        e.preventDefault();
        const searchTerm = document.getElementById("searchBox").value.trim();
        this.props.handleSearch(searchTerm); 
        console.log('search input:', searchTerm);
    }

    render() {
        return (
            <div className="searchBar">
                <form onSubmit = {(e) => this.processSearch(e)}>
                    <label htmlFor="searchBox">Search:</label>  
                    <input id="searchBox" type="text" maxLength="50" required/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}


export default SearchBar;
import React from 'react';

class SearchBar extends React.Component {

    processSearch(e) {
        e.preventDefault();
        const searchTerm = document.getElementById("searchBox").value; 
        this.props.handleSearch(searchTerm); 
    }

    render() {
        return (
            <div className="searchBar">
                <form onSubmit = {(e) => this.processSearch(e)}>
                    <label htmlFor="searchBox">Search</label>  
                    <input id="searchBox" type="text" required/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}


export default SearchBar;
import React from 'react';
import SearchBar from './searchBar';
import FilterBar from './filterBar';
import './topBar.css';

class TopBar extends React.Component {    
    render() {
        return (
            <div className="topBar">
                <h1>Google Book Search</h1>
  
                <section className="inputBar">
                    {/* Search Bar */}
                    <SearchBar 
                        handleSearch={this.props.handleSearch}
                    />
                    
                    {/* Filter Bar */}
                    <FilterBar 
                        handlePrintType={this.props.handlePrintType}
                        handleBookType={this.props.handleBookType}
                    />
                </section>  
            </div>  
        )
    }
}



export default TopBar;
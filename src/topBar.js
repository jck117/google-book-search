import React from 'react';
import SearchBar from './SearchBar';
import FilterBar from './filterBar';

class TopBar extends React.Component {    
    render() {
        return (
            <div className="topBar">
                <header>Google Book Search</header>
  
                <section className="inputBar">
                    {/* Search Bar */}
                    <SearchBar 
                        handleSearch={this.props.handleSearch}
                    />
                    
                    {/* Filter Bar */}
                    <FilterBar handlePrintType={this.props.handlePrintType}/>
                </section>  
            </div>  
        )
    }
}



export default TopBar;
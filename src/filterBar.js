import React from 'react';
import PrintTypeFilter from './printTypeFilter';
import BookTypeFilter from './bookTypeFilter';
import './filterBar.css';

class FilterBar extends React.Component {

    render(){

        return (
            <div className="filters">
                {/* Print Filter */}
                <PrintTypeFilter handlePrintType={this.props.handlePrintType}/>

                {/* Book Filter */}
                <BookTypeFilter handleBookType={this.props.handleBookType}/>
        </div>            
        )
    }
}


export default FilterBar;
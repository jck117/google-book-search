import React from 'react';
import PrintTypeFilter from './printTypeFilter';
import BookTypeFilter from './bookTypeFilter';

class FilterBar extends React.Component {

    render(){

        return (
            <div className="filters">
                {/* Print Filter */}
                <PrintTypeFilter handlePrintType={this.props.handlePrintType}/>

                {/* Book Filter */}
                <BookTypeFilter />
        </div>            
        )
    }
}


export default FilterBar;
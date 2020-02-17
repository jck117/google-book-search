import React from 'react';

const printTypes = ['all', 'books', 'magazines'];

class PrintTypeFilter extends React.Component {
    render(){
        const printTypesOptions = printTypes.map((type, i) => <option value={type} key={i}>{type}</option>);

        return(
            <div id="printTypeFilter">
                <form>
                    <label htmlFor="printType">Print Type</label>
                    <select id="printType" name="printType" onChange={e => this.props.handlePrintType(e.target.value)}>
                        {printTypesOptions}    
                    </select>
                </form>  
            </div>
        )        
    }
}

export default PrintTypeFilter;
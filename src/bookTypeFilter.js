import React from 'react';

const bookTypes = ['partial', 'full', 'free-ebooks', 'paid-ebooks', 'ebooks'];


class BookTypeFilter extends React.Component {
    render(){
        const bookTypesOptions = bookTypes.map((type, i) => <option value={type} key={i}>{type}</option>);

        return(
            <div id="bookTypeFilter">
                <form>
                    <label htmlFor="bookType">Book Type</label>
                    <select id="bookType" name="bookType" onChange={e=>console.log(e.target.value)}>
                        {bookTypesOptions}    
                    </select>
                </form>  
             </div>
        )        
    }
}

export default BookTypeFilter;



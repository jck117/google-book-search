import React from 'react';
import BookDetail from './bookDetail';

class SearchResults extends React.Component {
    render(){
        return(
            <div className="searchResults">
                {this.props.list.map((object,i) => ( 
                    <BookDetail 
                        title={object.volumeInfo.title}
                        author={object.volumeInfo.authors}
                        price={object.saleInfo.listPrice ? object.saleInfo.listPrice.amount : "Price info not available"}
                        description={object.searchInfo ? object.searchInfo.textSnippet : "Description not available"}
                        imgurl={object.volumeInfo.imageLinks ? object.volumeInfo.imageLinks.thumbnail : "http://images.hrp.org.uk/assets/previews/templates/not_available.jpg"}
                        key={i}
                    />
                ))}
            </div>    
        )
    }
}


export default SearchResults;



/*
    <BookDetail title={object.volumeInfo.title}
        author={object.volumeInfo.authors}
        price={object.saleInfo.listPrice.amount}
        description={object.searchInfo.textSnippet}
        imgurl={object.volumeInfo.imageLinks.thumbnail}
    />
*/
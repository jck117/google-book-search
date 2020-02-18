import React from 'react';
import BookDetail from './bookDetail';

class SearchResults extends React.Component {
    render(){
        return(
            <div className="searchResults">
                { this.props.list ? 
                    this.props.list.map((object,i) => ( 
                        <BookDetail 
                            key={i}
                            title={object.volumeInfo.title}
                            author={object.volumeInfo.authors}
                            price={object.saleInfo.listPrice ? '$'+ object.saleInfo.listPrice.amount : "Free"}
                            description={object.searchInfo ? object.searchInfo.textSnippet : "Description not available"}
                            imgurl={object.volumeInfo.imageLinks ? object.volumeInfo.imageLinks.thumbnail : "http://images.hrp.org.uk/assets/previews/templates/not_available.jpg"}
                            infoLink={object.volumeInfo.infoLink}
                        />
                    ))
                   : 
                   <div className="app_error">No result(s) are currently available for your search input and/or selected [print | book] type.</div>
                }
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
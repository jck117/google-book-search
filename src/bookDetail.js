import React from 'react';
import './bookDetail.css';

class BookDetail extends React.Component {
    render(){
        return(
            <div className="bookDetail">    
                <h1>{this.props.title}</h1>
                <div>
                    <img src={this.props.imgurl} alt="book-thumbnail" />
                    <div>
                        <p>Author(s): {this.props.author}</p>
                        <p>Price: {this.props.price}</p>
                        <p>{this.props.description}</p>
                        <a href={this.props.infoLink} rel="noopener noreferrer" target="_blank">Additional Info</a>
                    </div>
                </div>    

            </div>
        )
    }
}

export default BookDetail;
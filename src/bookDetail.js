import React from 'react';


class BookDetail extends React.Component {
    render(){
        return(
            <div className="bookDetail">    
                <img src={this.props.imgurl} alt="book-thumbnail" />
                <h1>{this.props.title}</h1>
                <p>{this.props.author}</p>
                <p>{this.props.price}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}



export default BookDetail;
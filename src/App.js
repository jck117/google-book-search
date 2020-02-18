import React from 'react';
import SearchResults from './searchResults';
import TopBar from './topBar';
import './App.css';

// https://developers.google.com/books/docs/overview
// GoogleBooksAPI key: AIzaSyAee0bCQ32Rpzgy_hXq5nK5X9IgUCTsaIk
// https://www.googleapis.com/books/v1/volumes?q=search+terms

class App extends React.Component {
  
  state = {
    list: [],
    printType: 'all',
    bookType: 'partial',
    searchTerm: ''
  }
  
  updateSearch(value) {
    this.setState({
        searchTerm: value
    }, () => this.updateSearchResults());
  }

  updatePrintType(value) {
    this.setState(
      {printType: value}, () => {
        this.state.searchTerm ?
          this.updateSearchResults()
          :
          console.log("No search query to process");
        }
    );
  }

  updateBookType(value) {
    this.setState(
      {bookType: value}, () => {
        this.state.searchTerm ?
          this.updateSearchResults()
          :
          console.log("No search query to process");
        }
    );
  }

  //method that accepts the user's search query & fetches data based on that query
  updateSearchResults() { 
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&filter=${this.state.bookType}&printType=${this.state.printType}`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong. This may happen if a search term is missing.');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const list = data.items;
        this.setState({
          list,
          error: null,
        })
      })
      .catch(err => {
        this.setState(
          {error: err.message}
        )
      })
  }
  
  render(){    
    const errorOrResults = this.state.error ?
      <div className="app_error">{this.state.error}</div>
       : 
       //SearchResults Component
       <SearchResults 
        list = {this.state.list}  
       /> ;

    return (
      <div className="App">
        {/* TopBar Component */}
        <TopBar 
          handleSearch={(query) => this.updateSearch(query)}
          handlePrintType={(value) => this.updatePrintType(value)}
          handleBookType={(value) => this.updateBookType(value)}
        />
        <main>
          {errorOrResults} 
        </main>
      </div>
    );
 }


}

export default App;




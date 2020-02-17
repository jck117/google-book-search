import React from 'react';
import SearchResults from './searchResults';
import TopBar from './topBar';

// https://developers.google.com/books/docs/overview
// GoogleBooksAPI key: AIzaSyAee0bCQ32Rpzgy_hXq5nK5X9IgUCTsaIk
// https://www.googleapis.com/books/v1/volumes?q=search+terms

class App extends React.Component {
  
  state = {
    list: [],
    printType: 'all',
    searchTerm: 'john'
  }
  
  updateSearch(value) {
    this.setState(
      {searchTerm: value}
    )
    this.updateSearchResults();
  }

  updatePrintType(value) {
    this.setState(
      {printType: value}
    )
    this.updateSearchResults();
  }

  updateBookType() {

  }

  //method that accepts the user's search query & fetches data based on that query
  updateSearchResults() { 
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}`)
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong');
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
    const error = this.state.error ?
      <div className="app_error">{this.state.error}</div>
       : 
      "";

    return (
      <div className="App">
        {/* TopBar Component */}
        <TopBar 
          handleSearch={(query) => this.updateSearch(query)}
          handlePrintType={(value) => this.updatePrintType(value)}
        />
        <main>
          {error} {/* SearchResults Component */}
          <SearchResults 
            list = {this.state.list}  /> 

        </main>
      </div>
    );
 }


}

export default App;




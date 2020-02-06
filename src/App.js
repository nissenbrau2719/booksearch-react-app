import React from 'react';
import './App.css';  
import SearchForm from './SearchForm/SearchForm';
import ResultsList from './ResultsList/ResultsList';
import FilterOptions from './FilterOptions/FilterOptions';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      printType: "all",
      bookType: "",
      results: [],
      myKey: "AIzaSyA3GASGmSP9jX27cbCXVitOWgF9em1BU1g",
      error: null
    }
  }

  updateSearchString = (newSearchString) => {
    let formattedString = newSearchString.split(' ').join('+');
    this.setState({
      searchString: formattedString
    });
  }

  updatePrintType = (filter) => {
    this.setState({
      printType: filter
    });
  }

  updateBookType = (filter) => {
    this.setState({
      bookType: filter
    });
  }

  handleBookSearch = (e) => {
    e.preventDefault();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchString}&key=${this.state.myKey}`;
    if(this.state.bookType === "free-ebooks") {
      url = url.concat('&filter=free-ebooks');
    } else if(this.state.printType !== "all") {
      url = url.concat('&printType=', this.state.printType);
    }
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong')
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          results: data.items
        })
      })
  }

  

  render() {
  const resultsList = !this.state.error 
      ? <ResultsList results={this.state.results} bookTypeFilter={this.state.bookType} printTypeFilter={this.state.printType} />
      : <div className="errorMessage">
          <h2>{this.state.error}</h2>
          <p>Please try again later</p>  
        </div>;

    return (
      <main className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchForm 
          handleSubmit={this.handleBookSearch}
          updateSearchString={this.updateSearchString} />
        <FilterOptions
          updateBookType={this.updateBookType}
          updatePrintType={this.updatePrintType} />
        {resultsList}
      </main>
    );
  }
  
}

export default App;
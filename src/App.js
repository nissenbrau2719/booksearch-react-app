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
      printType: "",
      bookType: "",
      results: this.props.exampleResults,
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


  handleBookSearch = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchString}&key=${this.state.myKey}`;
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong')
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          results: data.items
        })
      })
  }

  render() {
    return (
      <main className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchForm 
          handleSubmit={this.handleBookSearch}
          updateSearchString={this.updateSearchString} />
        <FilterOptions />
        <ResultsList results={this.state.results} />
      </main>
    );
  }
  
}

export default App;
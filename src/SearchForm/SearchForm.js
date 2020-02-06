import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label className="searchLabel" htmlFor="searchString">Search: </label>
        <input 
          className="searchInput"
          type="text" 
          name="searchString" 
          id="searchString"
          onChange={e => this.props.updateSearchString(e.target.value)}
        />
        <button className="searchButton" type="submit">Search</button>
      </form>
    )
  }
}

export default SearchForm;
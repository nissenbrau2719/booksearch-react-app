import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="searchString">Search: </label>
        <input 
          type="text" 
          name="searchString" 
          id="searchString"
          onChange={e => this.props.updateSearchString(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default SearchForm;
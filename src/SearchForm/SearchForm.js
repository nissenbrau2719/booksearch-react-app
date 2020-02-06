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
        />

      </form>
    )
  }
}

export default SearchForm;
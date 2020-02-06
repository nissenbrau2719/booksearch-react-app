import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
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
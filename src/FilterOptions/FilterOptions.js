import React from 'react';

class FilterOptions extends React.Component {
  render() {
    return (
      <div className="filterOptions">
        <label htmlFor="printType">Print Type: </label>
        <select 
          id="printType" 
          name="printType" 
          onChange={e => this.props.updatePrintType(e.target.value)}>
          <option value="">All</option>
          <option value="BOOK">Books</option>
          <option value="MAGAZINE">Magazines</option>
        </select>
        <label htmlFor="bookType">Book Type: </label>
        <select 
        id="bookType" 
        name="bookType"
        onChange={e => this.props.updateBookType(e.target.value)}>
          <option value="">No Filter</option>
          <option value="free-ebooks">Free Ebooks</option>
        </select>
      </div>
    )
  }
}

export default FilterOptions;